import React, {
  ChangeEvent,
  DetailedHTMLProps,
  InputHTMLAttributes,
  KeyboardEvent,
  ReactNode,
} from 'react';
import s from './SuperInputText.module.css';

// Тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

type SuperInputTextPropsType = Omit<DefaultInputPropsType, 'type'> & {
  onChangeText?: (value: string) => void;
  onEnter?: () => void;
  error?: ReactNode;
  spanClassName?: string;
};

const SuperInputText: React.FC<SuperInputTextPropsType> = ({
  onChange,
  onChangeText,
  onKeyDown,
  onEnter,
  error,
  className,
  spanClassName,
  id,
  ...restProps // все остальные пропсы попадут в объект restProps
}) => {
  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e); // если есть пропс onChange, то передать ему е (поскольку onChange не обязателен)
    onChangeText?.(e.currentTarget.value); // если есть пропс onChangeText, то передать ему текущее значение инпута
  };

  const onKeyDownCallback = (e: KeyboardEvent<HTMLInputElement>) => {
    onKeyDown?.(e); // если есть пропс onKeyDown, то передать ему е (поскольку onKeyDown не обязателен)
    if (onEnter && e.key === 'Enter') {
      onEnter(); // если нажата кнопка Enter, вызвать пропс onEnter
    }
  };

  const finalSpanClassName = s.error + (spanClassName ? ' ' + spanClassName : '');
  const finalInputClassName = s.input + (error ? ' ' + s.errorInput : ' ' + s.superInput) + (className ? ' ' + className : '');

  return (
    <div className={s.inputWrapper}>
      <input
        id={id}
        type={'text'}
        onChange={onChangeCallback}
        onKeyDown={onKeyDownCallback}
        className={finalInputClassName}
        {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
      />
      <span id={id ? id + '-span' : undefined} className={finalSpanClassName}>
        {error}
      </span>
    </div>
  );
};

export default SuperInputText;
