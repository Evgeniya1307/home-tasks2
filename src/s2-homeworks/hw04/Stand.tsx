import React, { useState } from 'react'
import SuperInputText from './common/c1-SuperInputText/SuperInputText' 
import SuperButton from './common/c2-SuperButton/SuperButton' 
import SuperCheckbox from './common/c3-SuperCheckbox/SuperCheckbox' 
import s from './Stand.module.css' 

const Stand = () => {
    const [text, setText] = useState<string>('') // Состояние для хранения текста из инпута
    const [checked, setChecked] = useState<boolean>(false) // Состояние для хранения состояния чекбокса

    return (
        <div className={s.stand}>
            <div className={s.inputs}>
                <SuperInputText
                    value={text} // Значение инпута берется из состояния
                    onChangeText={setText} // Функция для обновления состояния при изменении текста
                    onEnter={() => alert(`Entered: ${text}`)} // Функция для вызова алерта при нажатии Enter
                    error={text ? '' : 'Text is required'} // Показ ошибки, если текст пустой
                />
                <SuperInputText value={'default'} /> {/* Инпут с дефолтным значением */}
            </div>
            <div className={s.buttons}>
                <SuperButton>default</SuperButton> {/* Кнопка с текстом "default" */}
                <SuperButton xType={'red'}>red</SuperButton> {/* Кнопка с типом "red" */}
                <SuperButton xType={'secondary'}>secondary</SuperButton> {/* Кнопка с типом "secondary" */}
                <SuperButton disabled>disabled</SuperButton> {/* Отключенная кнопка */}
            </div>
            <div className={s.checkboxes}>
                <SuperCheckbox checked={checked} onChangeChecked={setChecked}>
                    Some text
                </SuperCheckbox> {/* Чекбокс с текстом "Some text" */}
                <SuperCheckbox checked={!checked} onChangeChecked={setChecked}>
                    Some other text
                </SuperCheckbox> {/* Чекбокс с текстом "Some other text" */}
            </div>
        </div>
    )
}

export default Stand
