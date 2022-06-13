import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'

import { logout as logoutFetch } from '../services/authorization'
import { useToken } from './useToken'

import { cookieWithLifeTime, Role, Routes } from '../helpers'
import { initialValue, ProfileInfoContext } from '../context'
import { useContext } from 'react'

export const useAuth = () => {
    const {
        getToken,
        setRefreshToken,
        setToken,
        getRefreshToken,
        removeToken,
    } = useToken()
    const [cookies, setCookie, removeCookie] = useCookies()
    const location = useNavigate()
    const roleDate = new Date(Date.now() + cookieWithLifeTime.role)
    const { setInfo } = useContext(ProfileInfoContext)

    const setRole = (role: string) => {
        setCookie(cookieWithLifeTime[cookieWithLifeTime.role], role, {
            expires: roleDate,
        })
    }

    const getRole = (): string => {
        if (cookies.role === undefined) logout()

        return cookies.role
    }

    const redirectByRole = (role: string) => {
        switch (role) {
            case Role.student:
                location(Routes.home)
                break
            case Role.admin:
                location(Routes.admin)
                break
        }
    }

    const login = (
        token: string,
        refreshToken: string,
        role: string = Role.student
    ) => {
        setToken(token)
        setRefreshToken(refreshToken)
        setRole(role)
        redirectByRole(role)
    }

    const logout = () => {
        removeToken(cookieWithLifeTime[cookieWithLifeTime.token])
        removeToken(cookieWithLifeTime[cookieWithLifeTime.refreshToken])
        removeCookie(cookieWithLifeTime[cookieWithLifeTime.role])
        setInfo(initialValue)
        logoutFetch(getRefreshToken())
    }

    const loggedIn = (): boolean => {
        return !!getToken()
    }

    return {
        login,
        logout,
        loggedIn,
        getRole,
    }
}
