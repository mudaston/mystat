import styled from 'styled-components'

export const Style = styled.div`
    input {
        display: none;
    }

    input[type='radio']:checked + label:before {
        background-color: var(--accent-100);
    }

    label {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;

        line-height: 1;

        &:before {
            content: '';
            display: block;

            width: 15px;
            height: 15px;

            border: 2px solid var(--accent-100);
            border-radius: 100%;

            transition: background-color 0.3s ease;
        }
    }
`
