import { FC, useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { useAuth } from '../../../hooks'
import { Link, useLocation } from 'react-router-dom'

import LanguageSwitcher from '../../controls/LanguageSwitcher/LanguageSwitcher'
import { Wrapper } from './Wrapper'
import { ToolTip } from '../../index'

import { Routes } from '../../../helpers'
import { ProfileInfoContext } from '../../../context'

interface OwnProps {}

type Props = OwnProps

const Header: FC<Props> = () => {
    const { t } = useTranslation(['common'])
    const location = useLocation()
    const { logout } = useAuth()
    const {
        info: { fio },
    } = useContext(ProfileInfoContext)

    const exitClickHandler = () => {
        logout()
    }

    const showExitButton =
        location.pathname !== Routes.login &&
        location.pathname !== Routes.signUp

    const showRegistrationButton = location.pathname === Routes.login

    const showLoginButton = location.pathname === Routes.signUp

    return (
        <Wrapper>
            <nav>
                <Link
                    aria-label={t('toHomePage')}
                    to={Routes.home}
                    className='logo'
                >
                    <div>RK</div>
                </Link>
                <span className='username'>{fio}</span>
                <LanguageSwitcher />
                {showExitButton && (
                    <>
                        <ToolTip
                            id='exitButton'
                            effect={'solid'}
                            place={'bottom'}
                            delayShow={300}
                            padding='0.3125rem 0.625rem'
                        />
                        <button
                            aria-label={t('logout')}
                            data-for='exitButton'
                            data-tip={t('logout')}
                            className='exit'
                            onClick={exitClickHandler}
                        >
                            <svg
                                width='25'
                                height='26'
                                viewBox='0 0 25 26'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    className='door'
                                    d='M6.66667 8.125V1.625H21.6667L15 4.875V19.5H6.66667V14.625H5V21.125H15V26L25 21.125V0H5V8.125H6.66667Z'
                                    fill='#007FFF'
                                />
                                <path
                                    d='M0 9.33333H8.125V6L13 11L8.125 16V12.6667H0V9.33333Z'
                                    fill='#007FFF'
                                />
                            </svg>
                        </button>
                    </>
                )}
                {showRegistrationButton && (
                    <Link to={Routes.signUp}>{t('registration')}</Link>
                )}
                {showLoginButton && (
                    <Link to={Routes.login}>{t('signIn')}</Link>
                )}
            </nav>
        </Wrapper>
    )
}

export default Header
