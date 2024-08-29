import React, { useState } from 'react';
import SuperInputText from './common/c1-SuperInputText/SuperInputText';
import SuperButton from './common/c2-SuperButton/SuperButton';
import SuperCheckbox from './common/c3-SuperCheckbox/SuperCheckbox';
import s from './Stand.module.css';

const Stand = () => {
  // Состояние для текста и чекбоксов
  const [text, setText] = useState<string>('');
  const [checked, setChecked] = useState<boolean>(false);

  // Обработчик изменения первого чекбокса
  const handleFirstCheckboxChange = (checked: boolean) => {
    setChecked(checked);
  };

  // Обработчик изменения второго чекбокса, который инвертирует состояние первого чекбокса
  const handleSecondCheckboxChange = (checked: boolean) => {
    setChecked(!checked);
  };

  return (
    <div className={s.stand}>
      <div className={s.inputs}>
        {/* Поле ввода текста с обработкой ошибок и очисткой по Enter */}
        <SuperInputText
          id='hw4-super-input-with-error'
          value={text}
          onChangeText={setText}
          onEnter={() => setText('')}
          error={text ? '' : 'Text is required'}
        />
        {/* Второе поле ввода текста, синхронизированное с первым */}
        <SuperInputText id='hw4-super-input-like-old' value={text} />
      </div>
      <div className={s.buttons}>
        {/* Кнопки с разными стилями */}
        <SuperButton id='hw4-super-button-default'>default</SuperButton>
        <SuperButton id='hw4-super-button-red' xType='red'>red</SuperButton>
        <SuperButton id='hw4-super-button-secondary' xType='secondary'>secondary</SuperButton>
        <SuperButton id='hw4-super-button-disabled' disabled>disabled</SuperButton>
      </div>
      <div className={s.checkboxes}>
        {/* Первый чекбокс, управляемый состоянием checked */}
        <SuperCheckbox
          id='hw4-super-checkbox-with-text'
          checked={checked}
          onChangeChecked={handleFirstCheckboxChange}
        >
          Some text
        </SuperCheckbox>
        {/* Второй чекбокс, инвертирующий состояние первого */}
        <SuperCheckbox
          id='hw4-super-checkbox-like-old'
          checked={!checked}
          onChangeChecked={handleSecondCheckboxChange}
        >
          Some other text
        </SuperCheckbox>
      </div>
    </div>
  );
}

export default Stand;
