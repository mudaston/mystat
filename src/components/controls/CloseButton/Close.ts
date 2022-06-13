import styled from 'styled-components'

export const Close = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    position: absolute;
    top: -3.125rem;
    right: -3.125rem;

    height: 1.875rem;

    padding: 0.625rem;

    background-color: transparent;

    cursor: pointer;

    &:hover {
        .first {
            transform: translateY(5px) rotate(45deg);
        }
        .second {
            transform: translateY(-3px) rotate(-45deg);
        }
    }

    span {
        display: block;

        width: 20px;
        height: 2px;

        background-color: var(--accent-100);

        transition: 0.3s ease;
    }
`
