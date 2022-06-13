import styled from 'styled-components'
import { device } from '../../../assets/js/mediaQueries'

export const Wrapper = styled.div`
    padding: 0.9375rem 1.875rem;

    border-radius: 0.625rem;

    background-color: var(--primary-400);

    .filters {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex: 1;
        gap: 1.25rem;

        margin: 0 auto;
    }

    .left {
        display: flex;
        flex: 1 1;
        gap: 1.25rem;

        max-width: 370px;
    }

    @media ${device.tablet} {
        .filters {
            flex-direction: column;
        }

        .left {
            flex-direction: column;

            max-width: initial;
            width: 100%;
        }
    }
`
