import { FC, useId } from 'react'
import { useTranslation } from 'react-i18next'

import { Subject } from '../../../interfaces/MyStatServiceWorker/Student'

import { Style } from './Style'
import { ToolTip } from '../../index'

interface OwnProps {
    fio: string
    subjects: Subject[]
}

type Props = OwnProps

const ProfileInfo: FC<Props> = ({ fio, subjects }) => {
    const { t } = useTranslation(['common'])

    const fioID = useId()
    const subjectsID = useId()

    const transformedFio = fio.split(' ').map((word, i, arr) => {
        if (i === 0) return word + ' '
        if (i === arr.length - 1) return word.substring(0, 1)

        return word.substring(0, 1) + '.'
    })

    const transformedSubjects = subjects.map(({ subject }) => subject)
    const showSubjectsToolTip = transformedSubjects.length > 1

    return (
        <Style>
            <ToolTip
                id={fioID}
                effect={'float'}
                place={'top'}
                delayShow={0}
                padding='0.3125rem 0.625rem'
            />
            <span className='fio' data-for={fioID} data-tip={fio}>
                {transformedFio}
            </span>
            <ToolTip
                id={subjectsID}
                effect={'float'}
                place={'top'}
                delayShow={0}
                padding='0.3125rem 0.625rem'
            />
            <span
                data-for={subjectsID}
                data-tip={
                    showSubjectsToolTip ? transformedSubjects.join('\n') : ''
                }
            >
                {!transformedSubjects.length && t('noSubjects')}
                {transformedSubjects[0]}
            </span>
        </Style>
    )
}

export default ProfileInfo
