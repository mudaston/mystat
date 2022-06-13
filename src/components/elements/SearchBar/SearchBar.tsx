import { FC, useContext, useLayoutEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { useMyStatServiceWorker } from '../../../services/api/hooks'
import { Group, Subject } from '../../../interfaces/MyStatServiceWorker'
import { StudentsContext } from '../../../context'

import { Search, Select } from '../../index'
import { Wrapper } from './Wrapper'

interface OwnProps {}

type Props = OwnProps

const SearchBar: FC<Props> = () => {
    const { t } = useTranslation(['home'])
    const { getAllGroups, getStudentsByGroupID, getSubjectsByGroupID } =
        useMyStatServiceWorker()
    const [groups, setGroups] = useState<Group[]>([])
    const [subjects, setSubjects] = useState<Subject[]>([])
    const { setStudents, setSearch, setSubject } = useContext(StudentsContext)

    useLayoutEffect(() => {
        getAllGroups().then((res) => setGroups(res))
    }, [])

    const selected = async (option: string) => {
        //getting selected group id
        const groupID = Number(
            groups
                .filter(({ NameGroup }) => NameGroup === option)
                .map(({ ID }) => ID)
        )

        const students = await getStudentsByGroupID(groupID)
        const { result } = await getSubjectsByGroupID(groupID)

        setStudents(students)
        setSubjects(result)
    }

    const searchValue = (value: string) => {
        const lowerCaseSearchValue = value.toLowerCase()

        setSearch(lowerCaseSearchValue)
    }

    const subjectValue = (value: string) => {
        const lowerCaseSubjectValue = value.toLowerCase()

        setSubject(lowerCaseSubjectValue)
    }

    return (
        <Wrapper>
            <div className='filters'>
                <div className='left'>
                    <Select
                        ariaLabel={t('selectGroup')}
                        onSelect={selected}
                        items={groups.map(({ NameGroup }) => NameGroup)}
                    />
                    <Select
                        ariaLabel={t('selectSubject')}
                        onSelect={subjectValue}
                        items={subjects.map(({ NameSubject }) => NameSubject)}
                        showNotSelectedOption
                    />
                </div>
                <Search getValue={searchValue} />
            </div>
        </Wrapper>
    )
}

export default SearchBar
