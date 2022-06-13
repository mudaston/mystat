import styled from 'styled-components'

import { device } from '../../../assets/js'

export const Style = styled.div`
    height: 100%;
    max-height: 700px;

    padding: 2.5rem 1.875rem;
    border-radius: 0.625rem;

    color: #fff;

    background-color: var(--primary-400);

    div.scroll {
        display: grid;
        grid-auto-rows: 60px;
        gap: 20px;

        width: 100%;
        height: 100%;

        overflow-y: visible;
        overflow-x: hidden;

        @media ${device.tablet} {
            grid-auto-rows: 75px;
        }
    }

    @media ${device.tablet} {
        padding: 2.5rem 0;
    }
`
