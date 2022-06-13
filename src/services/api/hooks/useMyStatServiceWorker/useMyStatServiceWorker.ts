import { api } from '../../index'

import { useToken } from '../../../../hooks'

import {
    GetSubjectsByGroupID,
    Group,
    Student,
} from '../../../../interfaces/MyStatServiceWorker'
import { Subject } from '../../../../interfaces/MyStatServiceWorker/Student'

export const useMyStatServiceWorker = () => {
    const { getToken } = useToken()
    const request = 'api'
    const token: string = getToken() ?? ''

    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }

    const getAllGroups = async (): Promise<Group[]> => {
        const res = await api.get(`${request}/group`, config)

        if (res.status !== 200)
            throw new Error(
                'Something went wrong in useMyStatServiceWorker/getAllGroups'
            )

        return res.data.result
    }

    const getStudentsByGroupID = async (id: number): Promise<Student[]> => {
        const res = await api.get<{
            result: Student[]
        }>(`${request}/students/${id}`, {
            ...config,
        })

        if (res.status !== 200)
            throw new Error(
                'Something went wrong in useMyStatServiceWorker/getStudentsByGroupID'
            )

        let students = res.data.result

        students = students.map(({ id, fio, idGroup, arrSubject }) => {
            let newArrSubject: Subject[] = []

            if (arrSubject) {
                // @ts-ignore
                newArrSubject = JSON.parse(arrSubject)
            }

            return {
                id,
                fio,
                idGroup,
                arrSubject: newArrSubject,
            }
        })

        return students
    }

    const getSubjectsByGroupID = async (
        id: number
    ): Promise<GetSubjectsByGroupID> => {
        const res = await api.get<GetSubjectsByGroupID>(
            `${request}/subject/${id}`,
            {
                ...config,
            }
        )

        if (res.status !== 200)
            throw new Error(
                'Something went wrong in useMyStatServiceWorker/getSubjectsByGroupID'
            )

        return {
            result: res.data.result,
        }
    }

    return {
        getAllGroups,
        getStudentsByGroupID,
        getSubjectsByGroupID,
    }
}
