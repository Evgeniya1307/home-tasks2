import React, { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes } from 'react';
import s from './SuperCheckbox.module.css';

// Тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

type SuperCheckboxPropsType = Omit<DefaultInputPropsType, 'type'> & {
  onChangeChecked?: (checked: boolean) => void;
  spanClassName?: string;
};

const SuperCheckbox: React.FC<SuperCheckboxPropsType> = ({
  onChange,
  onChangeChecked,
  className,
  spanClassName,
  children,
  id,
  ...restProps
}) => {
  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e); // Если есть пропс onChange, передаем ему событие

    onChangeChecked?.(e.currentTarget.checked); // Если есть пропс onChangeChecked, передаем ему состояние чекбокса
  };

  const finalInputClassName = `${s.checkbox} ${className ? ' ' + className : ''}`;

  return (
    <label className={s.label}>
      <input
        id={id}
        type={'checkbox'}
        onChange={onChangeCallback}
        className={finalInputClassName}
        {...restProps} // Передаем остальные пропсы
      />
      {children && (
        <span
          id={id ? id + '-span' : undefined}
          className={s.spanClassName}
        >
          {children}
        </span>
      )}
    </label>
  );
};

export default SuperCheckbox;
