import styled from 'styled-components'

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1.25rem 0;
    flex: 1 1;

    max-width: 21.875rem;

    border-radius: 20px;
    padding: 30px 40px;

    background-color: var(--primary-400);

    .choose-role {
        display: flex;
        justify-content: space-between;
        gap: 10px;
    }
`
