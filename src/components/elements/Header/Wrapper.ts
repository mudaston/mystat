import styled from 'styled-components'

export const Wrapper = styled.header`
    height: 5rem;

    padding: 10px 1.875rem;

    border-bottom: 1px solid var(--primary-300);

    background-color: var(--primary-500);

    color: var(--text-color-dark-mode);

    user-select: none;

    .username {
        padding-left: 20px;
    }

    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;

        height: 100%;
        width: 100%;
        max-width: 1350px;

        margin: 0 auto;

        a {
            text-decoration: none;
            color: var(--text-color);
        }

        .logo {
            display: flex;
            justify-content: center;
            align-items: center;

            height: 3.75rem;
            width: 3.75rem;

            color: var(--accent-100);
            font-size: 1.5rem;
            font-weight: bold;

            border: 3px solid var(--accent-100);
            border-radius: 100%;
        }

        .door {
            transition: fill 0.3s ease;
        }

        .exit {
            outline: none;
            border: none;

            padding: 10px;

            background-color: transparent;

            &:hover {
                .door {
                    fill: var(--error-100);
                }
            }
        }
    }
`
