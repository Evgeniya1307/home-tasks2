import React, {
    DetailedHTMLProps,
    InputHTMLAttributes,
    HTMLAttributes,
    useState,
} from 'react'
import s from './SuperEditableSpan.module.css'
import SuperInputText from '../../../hw04/common/c1-SuperInputText/SuperInputText'
import editIcon from './editIcon.svg'

// Тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
// Тип пропсов обычного спана
type DefaultSpanPropsType = DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>

// Здесь мы говорим, что у нашего инпута будут такие же пропсы как у обычного инпута, кроме type
// (чтобы не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type SuperEditableSpanType = Omit<DefaultInputPropsType, 'type'> & {
    // И + ещё пропсы, которых нет в стандартном инпуте
    onChangeText?: (value: string) => void
    onEnter?: () => void
    error?: string

    spanProps?: DefaultSpanPropsType  & { defaultText?: string } // Пропсы для спана
}

const SuperEditableSpan: React.FC<SuperEditableSpanType> = (
    {
        autoFocus, // Автоматический фокус на инпуте при переключении в режим редактирования
        onBlur, // Событие, которое вызывается при потере фокуса инпутом
        onEnter, // Событие, которое вызывается при нажатии Enter в инпуте
        spanProps, // Дополнительные пропсы для спана

        ...restProps // Все остальные пропсы попадут в объект restProps
    }
) => {
    const [editMode, setEditMode] = useState<boolean>(false) // Локальное состояние для управления режимом редактирования
    const { children, onDoubleClick, className, defaultText, ...restSpanProps } = spanProps || {}

    const onEnterCallback = () => {
        // Выключить editMode при нажатии Enter
        setEditMode(false) // Переключаемся из режима редактирования
        onEnter?.() // Если передан onEnter пропс, вызываем его
    }
    const onBlurCallback = (e: React.FocusEvent<HTMLInputElement>) => {
        // Выключить editMode при нажатии за пределами инпута
        setEditMode(false) // Переключаемся из режима редактирования
        onBlur?.(e) // Если передан onBlur пропс, вызываем его
    }
    const onDoubleClickCallBack = (
        e: React.MouseEvent<HTMLSpanElement, MouseEvent>
    ) => {
        // Включить editMode при двойном клике
        setEditMode(true) // Включаем режим редактирования
        onDoubleClick?.(e) // Если передан onDoubleClick пропс, вызываем его
    }

    const spanClassName = s.span + (className ? ' ' + className : '')

    return (
        <>
            {editMode ? (
                <SuperInputText
                    autoFocus={autoFocus || true} // Автофокус на инпуте
                    onBlur={onBlurCallback} // Обработчик потери фокуса
                    onEnter={onEnterCallback} // Обработчик нажатия Enter
                    className={s.input} // Стили для инпута
                    {...restProps} // Отдаём инпуту остальные пропсы, если они есть (value например там внутри)
                />
            ) : (
                <div className={s.spanBlock}>
                    <img
                        src={editIcon}
                        className={s.pen}
                        alt={'edit'}
                    />
                    <span
                        onDoubleClick={onDoubleClickCallBack} // Двойной клик переключает в режим редактирования
                        className={spanClassName} // Стили для спана
                        {...restSpanProps}
                    >
                        {/* Если нет захардкодженного текста для спана, то значение инпута */}
                        {children || restProps.value || defaultText}
                    </span>
                </div>
            )}
        </>
    )
}

export default SuperEditableSpan
