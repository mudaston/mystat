import styled from 'styled-components'

export const Overlap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    position: fixed;
    inset: 0;
    z-index: 1500;

    min-width: 100vw;
    min-height: 100vh;

    background-color: transparent;
    color: var(--text-color);
`
