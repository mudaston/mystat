import { FC } from 'react'
import { Style as ToolTipStyled } from '../../../styled-components/ToolTip'

type Place = 'top' | 'bottom' | 'left' | 'right'
type Effect = 'float' | 'solid'

interface OwnProps {
    place: Place
    effect: Effect
    delayShow?: number
    id?: string
    padding?: string
}

type Props = OwnProps

const ToolTip: FC<Props> = ({
    place,
    effect,
    id = '',
    delayShow = 0,
    padding,
}) => {
    /*const showToolTip = window.innerWidth > size.tablet

    if (!showToolTip) return null*/

    return (
        <ToolTipStyled
            place={place}
            effect={effect}
            delayShow={delayShow}
            id={id}
            padding={padding}
        />
    )
}

export default ToolTip
