import styled from 'styled-components'
import { device } from '../../../assets/js/mediaQueries'

export const Style = styled.div`
    position: relative;

    height: 100%;

    span {
        position: absolute;
        top: 50%;
        left: 10px;

        transform: translateY(-50%);

        color: var(--accent-100);
        font-size: 0.9375rem;
    }

    @media ${device.tablet} {
        width: 100%;
    }
`
