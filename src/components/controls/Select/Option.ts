import styled from 'styled-components'

interface Props {
    alignItems?: boolean
}

export const Option = styled.div<Props>`
    display: flex;
    justify-content: ${({ alignItems }) =>
        alignItems ? 'center' : 'flex-start'};

    width: 100%;

    padding: 0.3125rem 1.25rem;

    user-select: none;

    &:hover {
        transition: background-color 0.5s ease;
        background-color: var(--primary-300);
    }
`
