import styled from 'styled-components'

interface Props {
    selected: boolean
    alignItems?: boolean
}

export const Button = styled.div<Props>`
    display: flex;
    align-items: center;
    justify-content: ${({ alignItems }) =>
        alignItems ? 'center' : 'space-between'};

    z-index: 2;

    height: 100%;
    width: 100%;

    border-radius: 1.5625rem;
    padding: 0 1.25rem;

    user-select: none;

    background-color: ${({ selected }) =>
        selected ? 'var(--accent-100)' : 'var(--grey-700)'};

    &.active {
        .icon {
            transform: rotate(0);
        }
    }

    .icon {
        font-size: 0.625rem;
        transform: rotate(-90deg);

        transition: transform 0.3s ease;

        user-select: none;
        pointer-events: none;
    }
`
