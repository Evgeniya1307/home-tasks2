import { UserType } from '../HW8';

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number };

// Редьюсер для обработки действий сортировки и фильтрации
export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => {
    switch (action.type) {
        case 'sort': {
            // Сортируем пользователей по имени
            const sortedState = [...state].sort((a, b) => {
                if (action.payload === 'up') {
                    return a.name > b.name ? 1 : -1;
                } else {
                    return a.name < b.name ? 1 : -1;
                }
            });
            return sortedState;
        }
        case 'check': {
            // Фильтрация пользователей по возрасту 18 и старше
            return state.filter(u => u.age >= action.payload);
        }
        default:
            return state;
    }
};
