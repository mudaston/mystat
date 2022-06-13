import styled from 'styled-components'

interface Props {
    error?: boolean
}

export const Style = styled.div<Props>`
    display: flex;
    flex-direction: column;
    gap: 10px;

    margin: 20px 0;

    label {
        display: flex;
        align-items: flex-end;
        justify-content: center;
        gap: 20px;
    }

    input[type='file'] {
        display: none;
    }

    svg {
        width: 50px;
        height: 100%;
    }

    svg > path {
        fill: var(--accent-100);
    }
`
