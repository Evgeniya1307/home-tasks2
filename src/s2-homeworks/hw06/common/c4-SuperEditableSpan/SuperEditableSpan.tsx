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
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement>
// Тип пропсов обычного спана
type DefaultSpanPropsType = DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement>

// Здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута, кроме type
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type SuperEditableSpanType = Omit<DefaultInputPropsType, 'type'> & {
    // И + ещё пропсы которых нет в стандартном инпуте
    onChangeText?: (value: string) => void
    onEnter?: () => void
    error?: string

    spanProps?: DefaultSpanPropsType  & {defaultText?: string}// Пропсы для спана
}

const SuperEditableSpan: React.FC<SuperEditableSpanType> = (
    {
        autoFocus,    // Автофокус на инпуте
        onBlur,       // Событие потери фокуса
        onEnter,      // Событие нажатия Enter
        spanProps,

        ...restProps // Все остальные пропсы попадут в объект restProps
    }
) => {
    const [editMode, setEditMode] = useState<boolean>(false)  // Локальное состояние для включения/выключения режима редактирования

    const {children, onDoubleClick, className, defaultText, ...restSpanProps} =
    spanProps || {}

    const onEnterCallback = () => {
        // Выключить editMode при нажатии Enter
        setEditMode(false)
        onEnter?.() // Вызов функции onEnter, если она передана
    }
    
    const onBlurCallback = (e: React.FocusEvent<HTMLInputElement>) => {
        // Выключить editMode при потере фокуса
        setEditMode(false)
        onBlur?.(e) // Вызов функции onBlur, если она передана
    }
    
    const onDoubleClickCallBack = (
        e: React.MouseEvent<HTMLSpanElement, MouseEvent>
    ) => {
        // Включить editMode при двойном клике
        setEditMode(true)
        onDoubleClick?.(e) // Вызов функции onDoubleClick, если она передана
    }

    const spanClassName = s.span
        + (className ? ' ' + className : '') // Добавление переданного className

    return (
        <>
            {editMode ? (  // Если editMode включен, показываем инпут
                <SuperInputText
                    autoFocus={autoFocus || true}  // Включаем автофокус
                    onBlur={onBlurCallback}  // Обработчик потери фокуса
                    onEnter={onEnterCallback}  // Обработчик нажатия Enter
                    className={s.input}  // Стили для инпута
                    {...restProps} // Отдаём инпуту остальные пропсы если они есть (value например там внутри)
                />
            ) : (
                <div className={s.spanBlock}>  // Если editMode выключен, показываем span
                    <img
                        src={editIcon}  // Иконка для редактирования
                        className={s.pen}
                        alt={'edit'}
                    />
                    <span
                        onDoubleClick={onDoubleClickCallBack}  // Обработчик двойного клика
                        className={spanClassName}  // Стили для спана
                        {...restSpanProps}
                    >
                        {/* Если нет захардкодженного текста для спана, то показываем значение инпута */}
                        {children || restProps.value || defaultText}
                    </span>
                </div>
            )}
        </>
    )
}

export default SuperEditableSpan
