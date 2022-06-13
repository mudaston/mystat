import ReactTooltip from 'react-tooltip'
import styled from 'styled-components'

interface Props {
    padding?: string
}

export const Style = styled(ReactTooltip)<Props>`
    &.type-dark.show {
        padding: ${({ padding }) => (padding ? padding : '0.5rem 0.9375rem')};
        border-radius: 10px;

        text-align: center;

        background-color: var(--accent-100);
        opacity: 1;
    }

    &.type-dark.show.place-left {
        &:before,
        :after {
            border-left-color: var(--accent-100);
        }
    }

    &.type-dark.show.place-bottom {
        &:before,
        :after {
            border-bottom-color: var(--accent-100);
        }
    }

    &.type-dark.show.place-top {
        &:before,
        :after {
            border-top-color: var(--accent-100);
        }
    }
`
