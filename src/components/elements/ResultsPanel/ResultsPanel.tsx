import { FC, useContext } from 'react'

import { StudentsContext } from '../../../context'
import { Student } from '../../../interfaces/MyStatServiceWorker'
import { Filters } from '../../../helpers'

import { ProfileInfo } from '../../index'
import { Style } from './Style'

interface OwnProps {}

type Props = OwnProps

const ResultsPanel: FC<Props> = () => {
    const { students, search, subject } = useContext(StudentsContext)

    // filtering by search, then by subject
    let filteredStudents: Student[] = students
        .filter(({ fio }) => {
            if (search.length === 0) return true

            return fio.toLowerCase().includes(search)
        })
        .filter(({ arrSubject }) => {
            if (subject === Filters.notSelected) return true

            if (!arrSubject.length) return false

            for (let i = 0; i < arrSubject.length; i++) {
                const lowerCaseSubject = arrSubject[i].subject.toLowerCase()

                if (lowerCaseSubject === subject) return true
            }

            return false
        })

    return (
        <Style>
            <div className='scroll'>
                {filteredStudents.map(({ id, fio, arrSubject }) => (
                    <ProfileInfo key={id} fio={fio} subjects={arrSubject} />
                ))}
            </div>
        </Style>
    )
}

export default ResultsPanel
