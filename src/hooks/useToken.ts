import { useEffect } from 'react'
import { useCookies } from 'react-cookie'

import { cookieWithLifeTime } from '../helpers'

export const useToken = () => {
    const [cookies, setCookie, removeCookie] = useCookies()
    const tokenDate = new Date(Date.now() + cookieWithLifeTime.token)
    const refreshDate = new Date(Date.now() + cookieWithLifeTime.refreshToken)

    useEffect(() => {
        const id = setTimeout(() => {
            removeToken(cookieWithLifeTime[cookieWithLifeTime.token])
        }, cookieWithLifeTime.token)

        return () => {
            clearTimeout(id)
        }
    }, [])

    const setToken = (token: string) => {
        setCookie(cookieWithLifeTime[cookieWithLifeTime.token], token, {
            expires: tokenDate,
        })
    }

    const setRefreshToken = (token: string) => {
        setCookie(cookieWithLifeTime[cookieWithLifeTime.refreshToken], token, {
            expires: refreshDate,
        })
    }

    const getToken = (): string | null => {
        return cookies.token
    }

    const getRefreshToken = (): string | null => {
        return cookies.refreshToken
    }

    const removeToken = (token: string) => {
        removeCookie(token)
    }

    return {
        setToken,
        setRefreshToken,
        getToken,
        getRefreshToken,
        removeToken,
    }
}
