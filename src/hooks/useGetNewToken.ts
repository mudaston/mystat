import { getNewToken } from '../services/authorization'

import { useToken } from './useToken'

export const useGetNewToken = () => {
    const { setToken, getToken, getRefreshToken } = useToken()

    return async () => {
        const token = getToken()
        if (token) return
        const refreshToken = getRefreshToken()
        if (!refreshToken) return

        try {
            const { accessToken } = await getNewToken(refreshToken)
            setToken(accessToken)
        } catch (error) {
            console.error(error)
        }
    }
}
