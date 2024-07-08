import React, { ChangeEvent, KeyboardEvent, useState } from 'react';
import Greeting from './Greeting';
import { UserType, pureAddUser, pureOnBlur, pureOnEnter } from './HW3';

type GreetingContainerPropsType = {
    users: UserType[];
    addUserCallback: (name: string) => void;
};

const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
    users,
    addUserCallback,
}) => {
    // Создаем состояние для имени и ошибки
    const [name, setName] = useState<string>('');
    const [error, setError] = useState<string>('');

    // Обработчик изменения ввода
    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value);
        error && setError('');
    };

    // Обработчик добавления пользователя
    const addUser = () => {
        pureAddUser(name, setError, setName, addUserCallback);
    };

    // Обработчик потери фокуса
    const onBlur = () => {
        pureOnBlur(name, setError);
    };

    // Обработчик нажатия клавиши Enter
    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        pureOnEnter(e, addUser);
    };

    // Общее количество пользователей и имя последнего добавленного пользователя
    const totalUsers = users.length;
    const lastUserName = users.length > 0 ? users[users.length - 1].name : '';

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    );
};

export default GreetingContainer;
