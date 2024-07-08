import React, { ChangeEvent, KeyboardEvent } from 'react';
import s from './Greeting.module.css';

type GreetingPropsType = {
    name: string;
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void;
    addUser: () => void;
    onBlur: () => void;
    onEnter: (e: KeyboardEvent<HTMLInputElement>) => void;
    error: string;
    totalUsers: number;
    lastUserName?: string;
};

const Greeting: React.FC<GreetingPropsType> = ({
    name,
    setNameCallback,
    addUser,
    onEnter,
    onBlur,
    error,
    totalUsers,
    lastUserName,
}) => {
    // Устанавливаем класс для ввода в зависимости от наличия ошибки
    const inputClass = error ? s.errorInput : s.input;

    return (
        <div id="hw3-form" className={s.greetingForm}>
            <div className={s.text}>
                {'Людей добавили: '}
                <span id="hw3-users-total">{totalUsers}</span>
            </div>

            <div className={s.inputAndButtonContainer}>
                <div>
                    {/* Ввод для имени пользователя */}
                    <input
                        id="hw3-input"
                        value={name}
                        onChange={setNameCallback}
                        className={inputClass}
                        onKeyDown={onEnter}
                        onBlur={onBlur}
                        placeholder="Введите имя"
                    />
                    {/* Сообщение об ошибке */}
                    <div id="hw3-error" className={s.error}>
                        {error}
                    </div>
                </div>

                {/* Кнопка для добавления пользователя */}
                <button
                    id="hw3-button"
                    onClick={addUser}
                    className={s.button}
                    disabled={!name.trim()}
                >
                    Add
                </button>
            </div>

            {/* Приветствие последнего добавленного пользователя */}
            {lastUserName && (
                <div className={s.greeting}>
                    Привет <span id="hw3-last-user">{lastUserName}</span>!
                </div>
            )}
        </div>
    );
};

export default Greeting;
