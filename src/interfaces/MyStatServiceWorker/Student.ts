export interface Subject {
    subject: string
}

export interface Student {
    id: number
    fio: string
    idGroup: number
    arrSubject: Subject[]
}
