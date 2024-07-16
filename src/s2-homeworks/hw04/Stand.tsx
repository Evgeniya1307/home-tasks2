import React, { useState } from 'react';
import SuperInputText from './common/c1-SuperInputText/SuperInputText';
import SuperButton from './common/c2-SuperButton/SuperButton';
import SuperCheckbox from './common/c3-SuperCheckbox/SuperCheckbox';
import s from './Stand.module.css';

const Stand = () => {
    // Состояние для текста
    const [text, setText] = useState<string>('');
    // Состояние для чекбокса
    const [checked, setChecked] = useState<boolean>(false);

    // Обработчик нажатия клавиши Enter
    const onEnterHandler = () => {
        setText(''); // Очистка текста при нажатии Enter
    }

    return (
        <div className={s.stand}>
            <div className={s.inputs}>
                <SuperInputText
                    id="hw4-super-input-with-error" // id для input с ошибкой
                    value={text} // Значение input
                    onChangeText={setText} // Обработчик изменения текста
                    onEnter={onEnterHandler} // Обработчик нажатия Enter
                    error={text ? '' : 'Text is required'} // Сообщение об ошибке, если текст пустой
                />
                <SuperInputText
                    id="hw4-super-input-like-old" // id для стандартного input
                    value={text} // Значение input
                    onChangeText={setText} // Обработчик изменения текста
                />
            </div>
            <div className={s.buttons}>
                <SuperButton id="hw4-super-button-default">default</SuperButton>
                <SuperButton id="hw4-super-button-red" xType={'red'}>red</SuperButton>
                <SuperButton id="hw4-super-button-secondary" xType={'secondary'}>secondary</SuperButton>
                <SuperButton id="hw4-super-button-disabled" disabled>disabled</SuperButton>
            </div>
            <div className={s.checkboxes}>
                <SuperCheckbox
                    id="hw4-super-checkbox-with-text" // id для первого чекбокса
                    checked={checked} // Состояние чекбокса
                    onChangeChecked={setChecked} // Обработчик изменения состояния чекбокса
                >
                    Some text
                </SuperCheckbox>
                <SuperCheckbox
                    id="hw4-super-checkbox-like-old" // id для второго чекбокса
                    checked={!checked} // Обратное состояние чекбокса
                    onChangeChecked={() => setChecked(!checked)} // Обработчик изменения состояния чекбокса
                >
                    Some other text
                </SuperCheckbox>
            </div>
        </div>
    );
}

export default Stand;

