import React, { ChangeEvent } from 'react';
import s from './SuperCheckbox.module.css';

type SuperCheckboxPropsType = {
  id?: string;
  checked?: boolean;
  onChangeChecked?: (checked: boolean) => void;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  children?: React.ReactNode;
};

const SuperCheckbox: React.FC<SuperCheckboxPropsType> = ({
  id,
  checked,
  onChangeChecked,
  onChange,
  children,
  ...restProps
}) => {
  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    if (onChangeChecked) {
      onChangeChecked(e.currentTarget.checked); // передаем новое состояние (checked)
    }
    if (onChange) {
      onChange(e); // если передан onChange, вызываем его
    }
  };

  const finalInputClassName = s.checkbox;

  return (
    <label>
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={onChangeCallback}
        className={finalInputClassName}
        {...restProps} // остальные пропсы если есть
      />
      {children && <span>{children}</span>}
    </label>
  );
};

export default SuperCheckbox;
