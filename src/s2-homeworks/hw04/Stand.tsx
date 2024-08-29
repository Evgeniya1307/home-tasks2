import React, { useState } from 'react';
import SuperInputText from './common/c1-SuperInputText/SuperInputText';
import SuperButton from './common/c2-SuperButton/SuperButton';
import SuperCheckbox from './common/c3-SuperCheckbox/SuperCheckbox';
import s from './Stand.module.css';

const Stand = () => {
  const [text, setText] = useState<string>('');
  const [checked, setChecked] = useState<boolean>(false);

  const handleFirstCheckboxChange = (isChecked: boolean) => {
    setChecked(isChecked);
  };

  const handleSecondCheckboxChange = (isChecked: boolean) => {
    setChecked(!isChecked);
  };

  return (
    <div className={s.stand}>
      <div className={s.inputs}>
        <SuperInputText
          id='hw4-super-input-with-error' // добавляем id
          value={text}
          onChangeText={setText}
          onEnter={() => setText('')} // Очищаем текст при нажатии Enter
          error={text ? '' : 'Text is required'}
        />
        <SuperInputText id='hw4-super-input-like-old' value={text} />
      </div>
      <div className={s.buttons}>
        <SuperButton id='hw4-super-button-default'>default</SuperButton>
        <SuperButton id='hw4-super-button-red' xType='red'>red</SuperButton>
        <SuperButton id='hw4-super-button-secondary' xType='secondary'>secondary</SuperButton>
        <SuperButton id='hw4-super-button-disabled' disabled>disabled</SuperButton>
      </div>
      <div className={s.checkboxes}>
        <SuperCheckbox
          id='hw4-super-checkbox-with-text'
          checked={checked}
          onChangeChecked={handleFirstCheckboxChange}
        >
          Some text
        </SuperCheckbox>
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
};

export default Stand;
