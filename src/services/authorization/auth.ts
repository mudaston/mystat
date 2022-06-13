import { api } from '../api'

import { Role } from '../../helpers'
import { Token } from './index'

export const getNewToken = async (refreshToken: string): Promise<Token> => {
    const res = await api.get<Token>('auth/token', {
        headers: {
            Authorization: `Bearer ${refreshToken}`,
        },
    })

    if (res.status !== 200) throw new Error('Error while getting new token')

    return {
        accessToken: res.data.accessToken,
    }
}

export const authSignUp = async (
    username: string,
    login: string,
    password: string,
    role: string = Role.student
): Promise<boolean> => {
    return true
}
