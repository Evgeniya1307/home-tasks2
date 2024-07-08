// HW3.tsx
import React, { useState } from 'react'
import { v1 } from 'uuid'
import s2 from '../../s1-main/App.module.css'
import GreetingContainer from './GreetingContainer'

// Шаг 1: Описание типа UserType
export type UserType = {
    _id: string
    name: string
}

// Шаг 3: Дописание типов и логики функции pureAddUserCallback и проверка её тестами
export const pureAddUserCallback = (
    name: string,
    setUsers: React.Dispatch<React.SetStateAction<UserType[]>>,
    users: UserType[]
) => {
    const user = {
        _id: v1(),
        name
    }
    setUsers([...users, user])
}

// Шаг 7: Дописание логики функций pureAddUser, pureOnBlur, pureOnEnter и проверка их тестами
export const pureAddUser = (
    name: string,
    setError: React.Dispatch<React.SetStateAction<string>>,
    setName: React.Dispatch<React.SetStateAction<string>>,
    addUserCallback: (name: string) => void
) => {
    if (name.trim() === '') {
        setError('Ошибка! Введите имя!')
    } else {
        addUserCallback(name)
        setName('')
    }
}

export const pureOnBlur = (
    name: string,
    setError: React.Dispatch<React.SetStateAction<string>>
) => {
    if (name.trim() === '') {
        setError('Ошибка! Введите имя!')
    }
}

export const pureOnEnter = (
    e: React.KeyboardEvent<HTMLInputElement>,
    addUser: () => void
) => {
    if (e.key === 'Enter') {
        addUser()
    }
}

const HW3 = () => {
    // Шаг 2: Указание нужного типа в useState с users
    const [users, setUsers] = useState<UserType[]>([])

    const addUserCallback = (name: string) => {
        pureAddUserCallback(name, setUsers, users)
    }

    return (
        <div id={'hw3'}>
            <div className={s2.hwTitle}>Homework #3</div>
            <div className={s2.hw}>
                <GreetingContainer
                    users={users}
                    addUserCallback={addUserCallback}
                />
            </div>
        </div>
    )
}

export default HW3
