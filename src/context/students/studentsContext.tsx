import { createContext, Dispatch, FC, SetStateAction, useState } from 'react'

import { Student } from '../../interfaces/MyStatServiceWorker'
import { Filters } from '../../helpers'

export interface Students {
    students: Student[]
    setStudents: Dispatch<SetStateAction<Student[]>>
    search: string
    setSearch: Dispatch<SetStateAction<string>>
    subject: string
    setSubject: Dispatch<SetStateAction<string>>
}

const StudentsContext = createContext<Students>({
    students: [],
    setStudents() {},
    search: '',
    setSearch() {},
    subject: '',
    setSubject() {},
})

interface Props {
    children: JSX.Element
}

const StudentsContextProvider: FC<Props> = ({ children }) => {
    const [students, setStudents] = useState<Student[]>([])
    const [search, setSearch] = useState<string>('')
    const [subject, setSubject] = useState<string>(Filters.notSelected)

    return (
        <StudentsContext.Provider
            value={{
                students,
                setStudents,
                search,
                setSearch,
                subject,
                setSubject,
            }}
        >
            {children}
        </StudentsContext.Provider>
    )
}

export { StudentsContextProvider, StudentsContext }
