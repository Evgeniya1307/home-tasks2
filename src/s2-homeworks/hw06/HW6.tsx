import React, { useState } from 'react'
import SuperEditableSpan from './common/c4-SuperEditableSpan/SuperEditableSpan'
import { restoreState, saveState } from './localStorage/localStorage'  // Импорт функций работы с localStorage
import s2 from '../../s1-main/App.module.css'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import s from './HW6.module.css'

/*
 * 1 - в файле SuperEditableSpan.tsx дописать логику функций onEnterCallback, onBlurCallback, onDoubleClickCallBack
 * 2 - дописать логику функции restore
 * 3 - сделать стили в соответствии с дизайном
 */

const HW6 = () => {
    const [value, setValue] = useState<string>('')  // Локальное состояние для значения текста

    const save = () => {
        // Сохранение значения в localStorage под ключом 'hw6-editable-span-value'
        saveState<string>('hw6-editable-span-value', value)
    }

    const restore = () => {
        // Восстановление значения из localStorage под ключом 'hw6-editable-span-value'
        const restoredValue = restoreState<string>('hw6-editable-span-value', '')  // Если нет значения в localStorage, возвращаем пустую строку
        setValue(restoredValue)  // Устанавливаем восстановленное значение в состояние
    }

    return (
        <div id={'hw6'}>
            <div className={s2.hwTitle}>Homework #6</div>

            {/* Демонстрация возможностей компоненты: */}
            <div className={s2.hw}>
                <div className={s.editableSpanContainer}>
                    <SuperEditableSpan
                        id={'hw6-spanable-input'}
                        value={value}  // Передаем состояние value в компоненту SuperEditableSpan
                        onChangeText={setValue}  // Обновляем состояние при изменении текста
                        spanProps={{
                            id: 'hw6-editable-span',
                            defaultText: 'enter text...',  // Текст по умолчанию для span
                        }}
                    />
                </div>

                <div className={s.buttonsContainer}>
                    <SuperButton id={'hw6-save'} onClick={save}>  // Кнопка сохранения в localStorage
                        Save to ls
                    </SuperButton>
                    <SuperButton
                        id={'hw6-restore'}
                        onClick={restore}  // Кнопка восстановления из localStorage
                        xType={'secondary'}
                    >
                        Get from ls
                    </SuperButton>
                </div>
            </div>
        </div>
    )
}

export default HW6
