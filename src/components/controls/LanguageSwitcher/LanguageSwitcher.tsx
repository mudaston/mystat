import { FC, useEffect, useState } from 'react'
import i18n from 'i18next'

import { Select } from '../../index'
import { Style } from './Style'

interface OwnProps {}

type Props = OwnProps

const getDefaultValue = () => {
    let language = localStorage.getItem('language')
    if (language) return language

    language = window.navigator ? window.navigator.language : 'uk'

    language = language.split('-')[0]

    return language
}

const LanguageSwitcher: FC<Props> = (props) => {
    const [language, setLanguage] = useState<string>(getDefaultValue)

    useEffect(() => {
        i18n.changeLanguage(language)
        localStorage.setItem('language', language)
    }, [language])

    const selectHandler = (option: string) => {
        if (i18n.language === option) return

        setLanguage(option)
    }

    return (
        <Style>
            <Select
                hideArrow
                defaultValue={language}
                alignItems
                active
                items={['ru', 'en', 'uk']}
                onSelect={selectHandler}
            />
        </Style>
    )
}

export default LanguageSwitcher
