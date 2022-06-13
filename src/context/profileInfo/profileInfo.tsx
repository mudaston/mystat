import {
    createContext,
    Dispatch,
    FC,
    SetStateAction,
    useEffect,
    useState,
} from 'react'

import { LocalStorage } from '../../helpers'
import { UserInfo } from '../../interfaces/MyStatServiceWorker'

export interface ProfileInfo {
    info: UserInfo
    setInfo: Dispatch<SetStateAction<UserInfo>>
}

const ProfileInfoContext = createContext<ProfileInfo>({
    info: {
        id: 0,
        fio: '',
    },
    setInfo() {},
})

interface Props {
    children: JSX.Element
}

export const initialValue = {
    id: 0,
    fio: '',
}

const ProfileContextProvider: FC<Props> = ({ children }) => {
    const [profileInfo, setProfileInfo] = useState<UserInfo>(initialValue)

    useEffect(() => {
        const profileInfoFromStorage = localStorage.getItem(
            LocalStorage.profileInfo
        )

        if (profileInfoFromStorage)
            setProfileInfo(JSON.parse(profileInfoFromStorage))
    }, [])

    useEffect(() => {
        localStorage.setItem(
            LocalStorage.profileInfo,
            JSON.stringify(profileInfo)
        )
    }, [profileInfo])

    return (
        <ProfileInfoContext.Provider
            value={{ info: profileInfo, setInfo: setProfileInfo }}
        >
            {children}
        </ProfileInfoContext.Provider>
    )
}

export { ProfileContextProvider, ProfileInfoContext }
