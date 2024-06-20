import React from 'react';
import s from './Message.module.css';

// Определяем типы данных для пропсов
type MessageType = {
    id: number;
    user: {
        avatar: string;
        name: string;
    };
    message: {
        text: string;
        time: string;
    };
};

// Тип пропсов для компонента Message
export type MessagePropsType = {
    message: MessageType;
};

const Message: React.FC<MessagePropsType> = ({ message }) => {
    return (
        <div id={'hw1-message-' + message.id} className={s.message}>
            <div className={s.imageAndText}>
                <img
                    id={'hw1-avatar-' + message.id}
                    src={message.user.avatar}
                    alt={`${message.user.name}'s avatar`}
                    className={s.avatar}
                />
                <div className={s.text}>
                    <div id={'hw1-name-' + message.id} className={s.name}>
                        {message.user.name}
                    </div>
                    <pre id={'hw1-text-' + message.id} className={s.messageText}>
                        {message.message.text}
                    </pre>
                </div>
            </div>
            <div id={'hw1-time-' + message.id} className={s.time}>
                {message.message.time}
            </div>
        </div>
    );
};

export default Message;
