import styled from 'styled-components'

import { device } from '../../../assets/js'

interface Props {
    selected: boolean
    active: boolean
}

export const Style = styled.div<Props>`
    display: flex;
    align-items: center;

    position: relative;
    z-index: ${({ active }) => (active ? '999' : '2')};

    height: 1.875rem;
    width: 100%;
    max-width: 170px;

    border-radius: 1.5625rem;

    color: var(--text-color);
    font-weight: bold;

    background-color: ${({ selected }) =>
        selected ? 'var(--accent-100)' : 'var(--grey-700)'};
    cursor: pointer;

    transition: z-index 0.3s ease;

    @media ${device.tablet} {
        max-width: initial;

        &:focus {
            max-width: initial;
        }
    }
`
