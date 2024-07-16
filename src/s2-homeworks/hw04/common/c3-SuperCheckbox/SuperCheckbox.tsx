import React, { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes } from 'react';
import s from './SuperCheckbox.module.css';

// Тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

// Расширяем тип пропсов для SuperCheckbox
type SuperCheckboxPropsType = Omit<DefaultInputPropsType, 'type'> & {
    onChangeChecked?: (checked: boolean) => void; // Дополнительный пропс для изменения состояния чекбокса
    spanClassName?: string; // Класс для span
};

const SuperCheckbox: React.FC<SuperCheckboxPropsType> = (
    {
        onChange, // Стандартный onChange обработчик
        onChangeChecked, // Обработчик изменения состояния чекбокса
        className, // Дополнительный класс для input
        spanClassName, // Класс для span
        children, // Текст внутри span
        id, // id для input

        ...restProps // остальные пропсы
    }
) => {
    // Обработчик изменения состояния чекбокса
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e); // Вызов стандартного onChange обработчика, если он есть
        onChangeChecked?.(e.currentTarget.checked); // Вызов обработчика изменения состояния, если он есть
    };

    // Классы для input
    const finalInputClassName = s.checkbox + (className ? ' ' + className : '');

    return (
        <label className={s.label}>
            <input
                id={id}
                type={'checkbox'}
                onChange={onChangeCallback}
                className={finalInputClassName}
                {...restProps} // остальные пропсы
            />
            {children && (
                <span
                    id={id ? id + '-span' : undefined}
                    className={s.spanClassName}
                >
                    {children}
                </span>
            )}
        </label> // благодаря label нажатие на span передастся в input
    );
}

export default SuperCheckbox;
