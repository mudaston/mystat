import { Role } from '../../helpers'
import { api } from '../api'

import { TokenWithRefresh } from './index'
import { UserInfo } from '../../interfaces/MyStatServiceWorker'

export interface ReturnType extends TokenWithRefresh {
    user: UserInfo
}

export const authLogin = async (
    login: string,
    password: string,
    role: string = Role.student
): Promise<ReturnType> => {
    const res = await api.post<ReturnType>(`auth/login/${role}`, {
        username: login,
        password,
    })

    if (res.status === 400) throw new Error('User authentication error')

    const data = res.data

    return {
        user: {
            id: data.user.id,
            fio: data.user.fio,
        },
        accessToken: data.accessToken,
        refreshToken: data.refreshToken,
    }
}
