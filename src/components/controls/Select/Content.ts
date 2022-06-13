import styled from 'styled-components'

interface Props {
    height: number
    alignItems?: boolean
}

export const Content = styled.div<Props>`
    display: flex;
    flex-direction: column;
    align-items: ${({ alignItems }) => (alignItems ? 'center' : 'initial')};

    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;

    height: 1.875rem;
    max-height: 150px;
    min-width: 100%;
    max-width: 1px;

    padding: 1.875rem 0 0;
    border-radius: 1.25rem;

    background-color: var(--accent-100);
    overflow-x: hidden;
    overflow-y: ${({ height }) => (height >= 150 ? 'auto' : 'hidden')};
    visibility: hidden;

    transition: visibility 0.3s linear, height 0.3s ease;

    ::-webkit-scrollbar-track {
        margin: 1.875rem 0 0.625rem;
    }

    &.entering {
        visibility: visible;
        height: ${({ height }) => height - 10}px;
    }

    &.entered {
        visibility: visible;
        height: ${({ height }) => height - 10}px;
    }
`
