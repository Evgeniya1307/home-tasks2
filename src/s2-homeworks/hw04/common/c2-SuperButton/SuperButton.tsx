import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import s from './SuperButton.module.css';

// Типы пропсов для SuperButton
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

type SuperButtonPropsType = DefaultButtonPropsType & {
    xType?: string; // Определяем тип кнопки
};

const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        xType, className, disabled, ...restProps
    }
) => {
    // Определяем финальные классы в зависимости от типа кнопки и состояния
    const finalClassName = s.button
        + (disabled ? ' ' + s.disabled
            : xType === 'red' ? ' ' + s.red
                : xType === 'secondary' ? ' ' + s.secondary
                    : ' ' + s.default)
        + (className ? ' ' + className : '');

    return (
        <button
            disabled={disabled}
            className={finalClassName}
            {...restProps} // Отдаём кнопке остальные пропсы
        />
    );
}

export default SuperButton;
