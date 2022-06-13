import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import { Layout, ProtectedAdminRoutes, ProtectedRoutes } from './components'
import { Routes as RoutesEnum } from './helpers'

const Home = lazy(() => import('./pages/Home/Home'))
const Login = lazy(() => import('./pages/Login/Login'))
const SignUp = lazy(() => import('./pages/SignUp/SignUp'))

function App() {
    return (
        <Suspense fallback={null}>
            <Routes>
                <Route path={RoutesEnum.home} element={<Layout />}>
                    <Route element={<ProtectedRoutes />}>
                        <Route index element={<Home />} />
                    </Route>
                    <Route element={<ProtectedAdminRoutes />}>
                        <Route
                            path={RoutesEnum.admin}
                            element={<h1>Teacher</h1>}
                        />
                    </Route>
                    <Route path={RoutesEnum.login} element={<Login />} />
                    <Route path={RoutesEnum.signUp} element={<SignUp />} />
                    <Route path='*' element={<div>Error 404</div>} />
                </Route>
            </Routes>
        </Suspense>
    )
}

export default App
