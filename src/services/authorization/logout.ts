import { api } from '../api'

export const logout = (refreshToken: string | null) => {
    try {
        api.delete('auth/logout', {
            headers: {
                Authorization: `Bearer ${refreshToken}`,
            },
        })
    } catch (e) {
        console.error(e)
    }
}
