import { FC } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

import { useAuth } from '../../hooks'
import { Role, Routes } from '../../helpers'

interface OwnProps {}

type Props = OwnProps

const ProtectedAdminRoutes: FC<Props> = () => {
    const { loggedIn, getRole } = useAuth()

    if (!loggedIn()) return <Navigate to={Routes.login} />

    if (getRole() === Role.student) return <Navigate to={Routes.home} />

    return <Outlet />
}

export default ProtectedAdminRoutes
