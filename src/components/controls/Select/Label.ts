import styled from 'styled-components'
import { device } from '../../../assets/js'

interface Props {
    maxWidth?: string
}

export const Label = styled.span<Props>`
    max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : '130px')};

    overflow: hidden;

    text-decoration: none;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: unset;

    @media ${device.tablet} {
        max-width: initial;
    }
`
