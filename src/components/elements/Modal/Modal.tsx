import { FC, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { useLocation, useNavigate } from 'react-router-dom'

import { Overlap } from './Overlap'
import { Style } from './Style'
import { CloseButton } from '../../index'

interface OwnProps {
    children: JSX.Element
}

type Props = OwnProps

const Modal: FC<Props> = ({ children }) => {
    const navigation = useNavigate()
    const location = useLocation()

    const whetherToShowButton = (): boolean => {
        return !!location.state
    }

    const clickHandler = () => {
        navigation(-1)
    }

    useEffect(() => {
        document.body.style.overflow = 'hidden'

        return () => {
            document.body.style.overflow = ''
        }
    }, [])

    return createPortal(
        <Overlap onClick={clickHandler}>
            <Style>
                {whetherToShowButton() && <CloseButton onClick={clickHandler} />}
                <div style={{ cursor: 'auto' }} onClick={(e) => e.stopPropagation()}>
                    {children}
                </div>
            </Style>
        </Overlap>,
        document.getElementById('modal-root') ?? document.body
    )
}

export default Modal
