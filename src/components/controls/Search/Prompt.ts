import styled from 'styled-components'
import { device } from '../../../assets/js/mediaQueries'

export const Prompt = styled.div`
    position: absolute;
    top: 50%;
    right: 5px;

    border: 1px solid var(--primary-300);
    border-radius: 5px;

    padding: 0 5px;

    transform: translateY(-50%);

    color: var(--grey-400);
    font-size: 12px;
    font-weight: 600;

    @media ${device.tablet} {
        display: none;
    }
`
