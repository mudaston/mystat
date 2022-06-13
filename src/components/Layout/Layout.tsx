import { FC, Suspense } from 'react'
import { Outlet } from 'react-router-dom'

import { ProfileContextProvider, StudentsContextProvider } from '../../context'

import { Header } from '../index'

interface OwnProps {}

type Props = OwnProps

const Layout: FC<Props> = () => {
    return (
        <ProfileContextProvider>
            <StudentsContextProvider>
                <main className='page'>
                    <Header />
                    <Suspense fallback={null}>
                        <Outlet />
                    </Suspense>
                </main>
            </StudentsContextProvider>
        </ProfileContextProvider>
    )
}

export default Layout
