import styled from 'styled-components'

interface Props {
    error?: boolean
}

export const Input = styled.input<Props>`
    padding: 5px 10px;
    outline: 1px solid
        ${({ error }) => (error ? 'var(--error-100)' : 'var(--accent-100)')};
    border: none;
    border-radius: 5px;

    color: var(--text-color);

    background-color: var(--primary-500);

    ::placeholder {
        color: var(--grey-400);
        opacity: 1;
    }

    :-ms-input-placeholder {
        color: var(--grey-400);
    }

    ::-ms-input-placeholder {
        color: var(--grey-400);
    }

    &:focus {
        outline: 2px solid var(--accent-100);
    }

    &[type='submit'] {
        border: none;
        outline: none;

        font-weight: 700;
        text-transform: uppercase;

        box-shadow: 0 0 2px var(--accent-100);

        transition: 0.1s box-shadow;

        &:hover {
            box-shadow: 0 0 5px var(--accent-100);
        }

        &:focus {
            outline: 2px solid var(--accent-100);
        }
    }

    &:disabled {
        background-color: var(--grey-700);
        cursor: not-allowed;
        box-shadow: 0 0 0 var(--accent-100);

        &:hover {
            box-shadow: 0 0 0 var(--accent-100);
        }
    }

    &[type='radio'] {
        outline: none;
    }

    &[type='file'] {
        background-color: red;
    }
`
