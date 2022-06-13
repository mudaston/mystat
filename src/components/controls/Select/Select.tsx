import { FC, Fragment, useEffect, useMemo, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Transition } from 'react-transition-group'

import { Style } from './Style'
import { Button } from './Button'
import { Label } from './Label'
import { Option } from './Option'
import { Content } from './Content'
import { ToolTip } from '../../index'
import { Filters } from '../../../helpers'

const uniqid = require('uniqid')

interface OwnProps {
    items: string[]
    onSelect?: (option: string, index?: number) => void
    hideArrow?: boolean
    defaultValue?: string
    active?: boolean
    alignItems?: boolean
    ariaLabel?: string
    showNotSelectedOption?: boolean
}

type Props = OwnProps

const Select: FC<Props> = ({
    items,
    onSelect,
    active,
    defaultValue,
    hideArrow,
    alignItems,
    ariaLabel,
    showNotSelectedOption,
}) => {
    const { t } = useTranslation(['common'])
    const [show, setShow] = useState(false)
    const [currentOption, setCurrentOption] = useState<string>(
        defaultValue ?? t('select')
    )
    const [selected, setSelected] = useState(active ?? false)
    const refContent = useRef<HTMLDivElement>(null)

    const onSelectHandler = (option: string, index?: number) => {
        onSelect?.(option, index)
        setSelected(true)
        setCurrentOption(option)
    }

    useEffect(() => {
        document.addEventListener('mousedown', clickOutsideHandler)

        return () => {
            document.removeEventListener('mousedown', clickOutsideHandler)
        }
    }, [])

    useEffect(() => {
        const translateValue = t('select')

        if (defaultValue) return
        if (selected) return

        setCurrentOption(translateValue)
    }, [t])

    const clickOutsideHandler = (e: any) => {
        const attribute = e.target.getAttribute('data-select-id')

        if (!attribute) setShow(false)
        if (attribute !== dataSelectId) setShow(false)
    }

    const dataSelectId = useMemo(() => uniqid(), [])

    return (
        <Style
            aria-label={ariaLabel}
            active={show}
            selected={selected}
            onClick={() => setShow((prev) => !prev)}
            data-select-id={dataSelectId}
        >
            <Button
                className={show ? 'active' : ''}
                selected={selected}
                alignItems={alignItems}
                data-select-id={dataSelectId}
            >
                <Label data-select-id={dataSelectId} maxWidth='110px'>
                    {currentOption === Filters.notSelected
                        ? t('select')
                        : currentOption}
                </Label>
                {hideArrow ? '' : <span className='icon icon-dropdown' />}
            </Button>
            <Transition in={show} timeout={1}>
                {(state) => {
                    let scrollHeight = refContent.current
                        ? refContent.current.scrollHeight + 8
                        : 0

                    return (
                        <Content
                            ref={refContent}
                            height={scrollHeight}
                            className={`${state} scroll`}
                            alignItems={alignItems}
                            data-select-id={dataSelectId}
                        >
                            {showNotSelectedOption && (
                                <Option
                                    onClick={() =>
                                        onSelectHandler(Filters.notSelected)
                                    }
                                    alignItems={alignItems}
                                    data-select-id={dataSelectId}
                                >
                                    <Label data-select-id={dataSelectId}>
                                        {t('select')}
                                    </Label>
                                </Option>
                            )}

                            {items.map((item, i) => (
                                <Fragment key={item}>
                                    {item.length > 12 && (
                                        <ToolTip
                                            place={'left'}
                                            effect='solid'
                                            delayShow={700}
                                            id={item}
                                        />
                                    )}
                                    <Option
                                        onClick={() => onSelectHandler(item, i)}
                                        alignItems={alignItems}
                                        data-select-id={dataSelectId}
                                        data-tip={item}
                                        data-for={item}
                                    >
                                        <Label data-select-id={dataSelectId}>
                                            {item}
                                        </Label>
                                    </Option>
                                </Fragment>
                            ))}
                        </Content>
                    )
                }}
            </Transition>
        </Style>
    )
}

export default Select
