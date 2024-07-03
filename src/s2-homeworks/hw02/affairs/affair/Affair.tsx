import React from 'react';
import { AffairType } from '../../HW2';
import s from './Affair.module.css';

// 9. Дописываем типизацию пропсов
type AffairPropsType = {
    affair: AffairType;
    deleteAffairCallback: (_id: number) => void;
}

const Affair: React.FC<AffairPropsType> = ({ affair, deleteAffairCallback }) => {
    // 10. Дописываем функцию deleteCallback и используем её
    const deleteCallback = () => {
        deleteAffairCallback(affair._id);
    }

    return (
        <div className={`${s.affair} ${s[affair.priority]}`} id={`hw2-affair-${affair._id}`}>
            <span className={s.name} id={`hw2-priority-${affair.priority}`}>{affair.name}</span>
            <button className={s.closeButton} onClick={deleteCallback}>X</button>
        </div>
    );
}

export default Affair;


