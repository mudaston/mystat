import styled from 'styled-components'

import { device } from '../../../assets/js'

export const Style = styled.div`
    display: flex;
    align-items: center;
    gap: 10px 0;

    padding: 0 30px;

    border-radius: 3.75rem;

    font-size: 18px;

    background: linear-gradient(
        90deg,
        rgba(0, 127, 255, 0.15) 0%,
        rgba(255, 255, 255, 0) 100%
    );

    span {
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 1 1;

        height: 100%;
        width: 100%;

        cursor: pointer;
    }

    span.fio {
        justify-content: flex-start;

        font-weight: 700;
        text-align: right;

        @media ${device.tablet} {
            justify-content: center;
        }
    }
    @media ${device.tablet} {
        flex-direction: column;

        padding: 10px 30px;
        border-radius: 0;
    }
`
