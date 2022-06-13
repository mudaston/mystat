import { FC, useId } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import { Style } from './Style'

interface OwnProps {
    children?: JSX.Element | null
    register: UseFormRegisterReturn
    error?: boolean
}

type Props = OwnProps

const File: FC<Props> = ({ register, error, children }) => {
    const { t } = useTranslation(['signup'])
    const id = useId()

    return (
        <Style error={error}>
            {children}
            <label htmlFor={id}>
                <svg
                    width='512'
                    height='334'
                    viewBox='0 0 512 334'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path
                        d='M389.453 93.958C382.388 93.958 375.475 94.5981 368.742 95.6991C351.949 40.7871 299.929 0.800049 238.31 0.800049C163.071 0.800049 102.118 60.397 102.118 133.895C102.118 140.449 102.63 146.9 103.577 153.248C99.968 152.813 96.332 152.557 92.594 152.557C41.445 152.557 -0.00100708 193.056 -0.00100708 243.053C-0.00100708 293.05 41.446 333.6 92.594 333.6H204.799V231.2H140.799L255.999 103.2L371.199 231.2H307.199V333.6H389.452C457.113 333.6 511.999 279.942 511.999 213.792C511.999 147.59 457.112 93.958 389.452 93.958H389.453Z'
                        fill='#fff'
                    />
                </svg>
                <span>{t('uploadProfilePhoto')}</span>
            </label>
            <input
                id={id}
                type='file'
                {...register}
                aria-label={t('uploadProfilePhoto')}
            />
        </Style>
    )
}

export default File
