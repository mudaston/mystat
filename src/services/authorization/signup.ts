import { api } from '../api'

export const authSignup = async (
    username: string,
    FIO: string,
    password: string
) => {
    const res = await api.post('auth/registration/student', {
        username,
        FIO,
        password,
    })

    if (res.status !== 200) throw new Error('Error while registering new user')
}
