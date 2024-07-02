import React from 'react';
import { AffairType } from '../../HW2';
import s from './Affair.module.css';

// 9. Дописываем типизацию пропсов
type AffairPropsType = {
    affair: AffairType; // Определяем тип для пропса affair как AffairType
    deleteAffairCallback: (_id: number) => void; // Определяем тип для пропса deleteAffairCallback как функцию, принимающую номер (_id)
}

const Affair: React.FC<AffairPropsType> = ({ affair, deleteAffairCallback }) => {
    // 10. Дописываем функцию deleteCallback и используем её
    const deleteCallback = () => {
        deleteAffairCallback(affair._id); // Вызов функции deleteAffairCallback с _id текущего дела (affair)
    }

    return (
        <div className={`${s.affair} ${s[affair.priority]}`}> {/* Применяем стили в зависимости от приоритета дела */}
            <span className={s.name}>{affair.name}</span> {/* Отображаем название дела */}
            <button className={s.closeButton} onClick={deleteCallback}>X</button> {/* Кнопка для удаления дела */}
        </div>
    );
}

export default Affair;
