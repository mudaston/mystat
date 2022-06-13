import { FC, useContext, useEffect, useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useTranslation } from 'react-i18next'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Navigate } from 'react-router-dom'
import Helmet from 'react-helmet'
import * as yup from 'yup'

import { Error, Form, Input, Style } from '../../styled-components'
import { Radio } from '../../components'

import { authLogin, FormValues } from '../../services/authorization'
import { useAuth, useGetNewToken } from '../../hooks'
import { appName, divider } from '../../assets/js'
import { myToUpperCase, Role, Routes } from '../../helpers'
import { ProfileInfoContext } from '../../context'

interface OwnProps {}

type Props = OwnProps

let schema = yup.object().shape({
    login: yup.string().required(),
    password: yup.string().required(),
})

const Login: FC<Props> = () => {
    const { t } = useTranslation(['common', 'login', 'form'])
    const [wrongData, setWrongData] = useState(false)
    const [examination, setExamination] = useState(false)
    const { loggedIn, login } = useAuth()
    const getNewToken = useGetNewToken()
    const { setInfo } = useContext(ProfileInfoContext)

    useEffect(() => {
        getNewToken()
    }, [])

    let {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>({ resolver: yupResolver(schema) })

    const onSubmitHandler: SubmitHandler<FormValues> = async ({
        login: loginValue,
        password,
        role,
    }) => {
        setExamination(true)
        try {
            const {
                user: { id, fio },
                accessToken,
                refreshToken,
            } = await authLogin(loginValue, password, role)

            setInfo({ id, fio })
            setWrongData(false)
            setExamination(false)
            login(accessToken, refreshToken, role)
        } catch (e) {
            console.error(e)
            setWrongData(true)
            setExamination(false)
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
                            {appName} {divider} Login
                        </title>
                    </Helmet>
                    <Style>
                        <h2>{t('letsStart', { ns: 'login' })}</h2>
                        <Form
                            onSubmit={handleSubmit<FormValues>(onSubmitHandler)}
                        >
                            {wrongData && (
                                <Error>
                                    {t('wrong_login_or_password', {
                                        ns: 'login',
                                    })}
                                </Error>
                            )}
                            <Input
                                error={!!errors.login}
                                type='text'
                                {...register('login')}
                                placeholder={t('login')}
                            />
                            <Input
                                error={!!errors.password}
                                type='password'
                                {...register('password')}
                                placeholder={t('password')}
                            />
                            <div className='choose-role'>
                                <Radio
                                    register={register('role')}
                                    value={Role.student}
                                    defaultChecked
                                >
                                    {myToUpperCase(
                                        t(Role.student, { ns: 'form' }),
                                        0,
                                        1
                                    )}
                                </Radio>
                                <Radio
                                    register={register('role')}
                                    value={Role.admin}
                                >
                                    {myToUpperCase(
                                        t(Role.admin, { ns: 'form' }),
                                        0,
                                        1
                                    )}
                                </Radio>
                            </div>
                            <Input
                                disabled={examination}
                                type='submit'
                                value={t('signIn')}
                            />
                        </Form>
                    </Style>
                </>
            )}
        </>
    )
}

export default Login
