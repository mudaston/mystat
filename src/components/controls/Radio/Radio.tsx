import { FC, useId } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

import { Style } from './Style'

interface OwnProps {
    children: JSX.Element | string
    value: string
    register: UseFormRegisterReturn
    defaultChecked?: boolean
}

type Props = OwnProps

const Radio: FC<Props> = ({ children, value, register, defaultChecked }) => {
    const id = useId()

    return (
        <Style>
            <input
                id={id}
                defaultChecked={defaultChecked}
                type='radio'
                value={value}
                {...register}
            />{' '}
            <label htmlFor={id}>{children}</label>
        </Style>
    )
}

export default Radio
