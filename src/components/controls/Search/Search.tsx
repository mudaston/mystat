import { ChangeEvent, FC, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'

import { size } from '../../../assets/js/mediaQueries'

import { Style } from './Style'
import { Input } from './Input'
import { Prompt } from './Prompt'

interface OwnProps {
    getValue?: (value: string) => void
}

type Props = OwnProps

const Search: FC<Props> = ({ getValue }) => {
    const { t } = useTranslation(['common'])
    const refInput = useRef<HTMLInputElement>(null)

    useEffect(() => {
        if (window.innerWidth > size.tablet) document.addEventListener('keydown', onKeyPress)

        return () => {
            if (window.innerWidth > size.tablet) document.removeEventListener('keydown', onKeyPress)
        }
    }, [])

    const onKeyPress = (e: KeyboardEvent) => {
        if (e.ctrlKey && e.code === 'KeyK') {
            e.preventDefault()
            if (refInput.current) refInput.current.focus()
        }
    }

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        getValue?.(e.target.value)
    }

    return (
        <Style>
            <span className='icon-search' />
            <Input
                ref={refInput}
                type='search'
                placeholder={t('search')}
                onChange={changeHandler}
            />
            <Prompt>Ctrl + K</Prompt>
        </Style>
    )
}

export default Search
