import React, { ChangeEvent } from 'react';
import s from './SuperCheckbox.module.css';

// Типы пропсов для компонента SuperCheckbox
type SuperCheckboxPropsType = {
  id?: string;
  checked: boolean;
  onChangeChecked: (checked: boolean) => void;
  children?: React.ReactNode;
};

const SuperCheckbox: React.FC<SuperCheckboxPropsType> = (
  {
    id, checked, onChangeChecked, children,
  }
) => {
  // Обработчик изменения состояния чекбокса
  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    onChangeChecked(e.currentTarget.checked);
  };

  return (
    <label className={s.checkbox}>
      <input
        id={id}
        type={'checkbox'}
        checked={checked}
        onChange={onChangeCallback}
      />
      {children && <span>{children}</span>}
    </label>
  );
};

export default SuperCheckbox;
