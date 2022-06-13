import { yupResolver } from '@hookform/resolvers/yup'
import { useTranslation } from 'react-i18next'
import { useForm } from 'react-hook-form'
import { Navigate } from 'react-router-dom'
import Helmet from 'react-helmet'
import { FC, useState } from 'react'
import * as yup from 'yup'
import { Error, Input, Style, Success } from '../../styled-components'
import { Form } from './Form'
import { useAuth } from '../../hooks'
import { appName, divider } from '../../assets/js'
import { Routes } from '../../helpers'
import { FormValues } from './FormValues'
import { authSignup } from '../../services/authorization'

interface OwnProps {}

interface FormValuesWithPasswordConfirmation extends FormValues {
    passwordConfirmation: string
}

type Props = OwnProps
let schema = yup.object().shape({
    fullName: yup.string().required(),
    userName: yup.string().required(),
    password: yup.string().required().min(8),
    passwordConfirmation: yup
        .string()
        .required()
        .oneOf([yup.ref('password'), null], 'Passwords must match'),
    /*photo: yup
        .mixed()
        .test('required', (file) => {
            return file?.[0]
        })
        .test('photoSize', (photo) => {
            return photo?.[0]?.size <= 63000000
        })
        .test('photoType', (photo) => {
            return (
                photo?.[0]?.type === 'image/jpeg' ||
                photo?.[0]?.type === 'image/png'
            )
        }),*/
})

const SignUp: FC<Props> = () => {
    const { t } = useTranslation(['common', 'form', 'signup'])
    const [wrongData, setWrongData] = useState(false)
    const [successful, setSuccessful] = useState(false)
    const [examination, setExamination] = useState(false)
    const { loggedIn } = useAuth()

    let {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValuesWithPasswordConfirmation>({
        resolver: yupResolver(schema),
    })

    const onSubmitHandler = async ({
        fullName,
        userName,
        password,
    }: FormValuesWithPasswordConfirmation) => {
        setExamination(true)

        try {
            await authSignup(userName, fullName, password)

            setExamination(false)
            setSuccessful(true)
            setWrongData(false)
        } catch (e) {
            console.error(e)
            setExamination(false)
            setWrongData(true)
            setSuccessful(false)
        }
    }

    return (
        <>
            {loggedIn() ? (
                <Navigate to={Routes.home} />
            ) : (
                <>
                    <Helmet>
                        <title>
                            {appName} {divider} SignUp
                        </title>
                    </Helmet>
                    <Style>
                        <Form
                            onSubmit={handleSubmit<FormValuesWithPasswordConfirmation>(
                                onSubmitHandler
                            )}
                        >
                            {successful && (
                                <Success>
                                    {t('registrationSuccess', { ns: 'signup' })}
                                </Success>
                            )}
                            {wrongData && (
                                <Error>
                                    {t('loginExists', { ns: 'signup' })}
                                </Error>
                            )}
                            <Input
                                error={!!errors.fullName}
                                type='text'
                                {...register('fullName')}
                                placeholder={t('userName', { ns: 'form' })}
                            />
                            <Input
                                error={!!errors.userName}
                                type='text'
                                {...register('userName')}
                                placeholder={t('login')}
                            />
                            {errors.password?.type === 'min' && (
                                <Error>
                                    {t('minPasswordLength', { ns: 'signup' })}
                                </Error>
                            )}
                            <Input
                                error={!!errors.password}
                                type='password'
                                {...register('password')}
                                placeholder={t('password')}
                            />
                            {errors.passwordConfirmation?.type === 'oneOf' && (
                                <Error>
                                    {t('passwordConfirmation', {
                                        ns: 'signup',
                                    })}
                                </Error>
                            )}
                            <Input
                                error={!!errors.passwordConfirmation}
                                type='password'
                                {...register('passwordConfirmation')}
                                placeholder={t('enterPasswordAgain', {
                                    ns: 'form',
                                })}
                            />
                            {/*<File register={register('photo')}>
                                <>
                                    {
                                        // @ts-ignore
                                        errors.photo?.type === 'photoType' && (
                                            <Error>
                                                {t('onlyJpegOrPngImages', {
                                                    ns: 'signup',
                                                })}
                                            </Error>
                                        )
                                    }
                                    {
                                        // @ts-ignore
                                        errors.photo?.type === 'photoSize' && (
                                            <Error>
                                                {t('photoSizeIsTooLarge', {
                                                    ns: 'form',
                                                })}
                                            </Error>
                                        )
                                    }
                                    {
                                        // @ts-ignore
                                        errors.photo?.type === 'required' && (
                                            <Error>
                                                {t('profilePhotoRequired', {
                                                    ns: 'form',
                                                })}
                                            </Error>
                                        )
                                    }
                                </>
                            </File>*/}
                            <Input
                                disabled={examination}
                                type='submit'
                                value={t('registration')}
                            />
                        </Form>
                    </Style>
                </>
            )}
        </>
    )
}

export default SignUp
