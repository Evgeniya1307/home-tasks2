import React, { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes } from 'react';
import s from './SuperCheckbox.module.css';

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

// Дополнительные пропсы для SuperCheckbox
type SuperCheckboxPropsType = Omit<DefaultInputPropsType, 'type'> & {
  onChangeChecked?: (checked: boolean) => void;
  spanClassName?: string;
};

// Компонент SuperCheckbox
const SuperCheckbox: React.FC<SuperCheckboxPropsType> = ({
  onChange,
  onChangeChecked,
  className,
  spanClassName,
  children, // текст внутри чекбокса
  id,
  checked, // добавляем checked
  ...restProps // остальные пропсы
}) => {
  // Обработчик изменения состояния чекбокса
  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e); // вызов внешнего onChange, если он есть
    onChangeChecked?.(e.currentTarget.checked); // вызов внешнего onChangeChecked, если он есть
  };

  // Классы для чекбокса
  const finalInputClassName = s.checkbox + (className ? ' ' + className : '');

  return (
    <label className={s.label}>
      <input
        id={id}
        type={'checkbox'}
        checked={checked} // добавляем checked
        onChange={onChangeCallback}
        className={finalInputClassName}
        {...restProps} // передача остальных пропсов в input
      />
      {children && (
        <span id={id ? id + '-span' : undefined} className={spanClassName}>
          {children}
        </span>
      )}
    </label>
  );
}

export default SuperCheckbox;

