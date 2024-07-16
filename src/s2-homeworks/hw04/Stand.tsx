import React, { useState } from 'react';
import SuperInputText from './common/c1-SuperInputText/SuperInputText'; // Обновленный путь к SuperInputText
import SuperButton from './common/c2-SuperButton/SuperButton'; // Обновленный путь к SuperButton
import SuperCheckbox from './common/c3-SuperCheckbox/SuperCheckbox'; // Обновленный путь к SuperCheckbox
import s from './Stand.module.css'; // Импортируем стили для компонента Stand

const Stand = () => {
    const [text, setText] = useState<string>(''); // Состояние для хранения текста из инпута
    const [checked, setChecked] = useState<boolean>(false); // Состояние для хранения состояния чекбокса

    const onEnterHandler = () => {
        setText(''); // Очистка поля ввода при нажатии Enter
    }

    return (
        <div className={s.stand}>
            <div className={s.inputs}>
                <SuperInputText
                    id="hw4-super-input-with-error" // Добавляем id для первого инпута
                    value={text} // Значение инпута берется из состояния
                    onChangeText={setText} // Функция для обновления состояния при изменении текста
                    onEnter={onEnterHandler} // Обработка нажатия Enter
                    error={text ? '' : 'Text is required'} // Показ ошибки, если текст пустой
                />
                <SuperInputText
                    id="hw4-super-input-default" // Добавляем id для второго инпута
                    value={text}
                    onChangeText={setText}
                /> {/* Инпут с дефолтным значением */}
            </div>
            <div className={s.buttons}>
                <SuperButton id="hw4-super-button-default">default</SuperButton> {/* Кнопка с текстом "default" */}
                <SuperButton id="hw4-super-button-red" xType={'red'}>red</SuperButton> {/* Кнопка с типом "red" */}
                <SuperButton id="hw4-super-button-secondary" xType={'secondary'}>secondary</SuperButton> {/* Кнопка с типом "secondary" */}
                <SuperButton id="hw4-super-button-disabled" disabled>disabled</SuperButton> {/* Отключенная кнопка */}
            </div>
            <div className={s.checkboxes}>
                <SuperCheckbox id="hw4-super-checkbox-with-text" checked={checked} onChangeChecked={setChecked}>
                    Some text
                </SuperCheckbox> {/* Чекбокс с текстом "Some text" */}
                <SuperCheckbox id="hw4-super-checkbox-like-old" checked={!checked} onChangeChecked={() => setChecked(!checked)}>
                    Some other text
                </SuperCheckbox> {/* Чекбокс с текстом "Some other text" */}
            </div>
        </div>
    );
}

export default Stand;
