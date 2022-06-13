import styled from 'styled-components'
import { device } from '../../../assets/js'

export const Input = styled.input`
    display: flex;
    align-items: center;

    height: 100%;
    width: 100%;
    max-width: 170px;

    padding: 0.375rem 3.75rem 0.375rem 2.1875rem;

    background-color: var(--primary-500);

    border: 1px solid var(--primary-300);
    outline: none;
    border-radius: 0.3125rem;

    color: var(--text-color);
    font-size: 14px;
    font-weight: 100;

    transition: 0.3s ease;

    //delete default cancel button
    ::-webkit-search-decoration,
    ::-webkit-search-cancel-button,
    ::-webkit-search-results-button,
    ::-webkit-search-results-decoration {
        -webkit-appearance: none;
    }

    ::placeholder {
        color: var(--grey-400);
        opacity: 1;
    }

    &:focus {
        max-width: 230px;
    }

    @media ${device.tablet} {
        max-width: initial;

        &:focus {
            max-width: initial;
        }
    }
`
