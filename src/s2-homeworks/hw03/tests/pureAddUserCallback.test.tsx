import { pureAddUserCallback } from '../HW3';
import { UserType } from '../HW3';

let initialState: UserType[];
const setUsers: React.Dispatch<React.SetStateAction<UserType[]>> = (newStateOrUpdater) => {
    if (typeof newStateOrUpdater === 'function') {
        initialState = (newStateOrUpdater as (prevState: UserType[]) => UserType[])(initialState);
    } else {
        initialState = newStateOrUpdater;
    }
};

beforeEach(() => {
    initialState = [];
});

test('name 1', () => {
    pureAddUserCallback('name', setUsers, initialState);
    expect(initialState.length).toBe(1);
    expect(initialState[0].name).toBe('name');
    expect(!!initialState[0]._id).toBe(true);
});
