import { FC } from 'react'

import { Close } from './Close'

interface OwnProps {
    onClick: () => void
}

type Props = OwnProps

const CloseButton: FC<Props> = ({ onClick }) => {
    return (
        <Close onClick={() => onClick}>
            <span className='first' />
            <span className='second' />
        </Close>
    )
}

export default CloseButton
