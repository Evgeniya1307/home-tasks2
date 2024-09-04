import React, {
    ChangeEvent,
    InputHTMLAttributes,
    DetailedHTMLProps,
    HTMLAttributes,
} from 'react';
import s from './SuperRadio.module.css';

// Типизация стандартных свойств для input
type DefaultRadioPropsType = DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
>;
// Типизация для дополнительных свойств span
type DefaultSpanPropsType = DetailedHTMLProps<
    HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
>;

// Основной тип пропсов для компонента SuperRadio
type SuperRadioPropsType = Omit<DefaultRadioPropsType, 'type'> & {
    options?: any[]; // Массив опций для отображения радиокнопок
    onChangeOption?: (option: any) => void; // Функция, вызываемая при выборе опции

    spanProps?: DefaultSpanPropsType; // Дополнительные пропсы для span
};

const SuperRadio: React.FC<SuperRadioPropsType> = ({
    id,
    name,
    className,
    options,
    value,
    onChange,
    onChangeOption,
    spanProps,
    ...restProps
}) => {
    // Обработчик изменения радиокнопки
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        const selectedValue = Number(e.target.value); // Получаем выбранное значение из события
        onChangeOption && onChangeOption(selectedValue); // Если передан коллбэк, вызываем его с новым значением
    };

    // Классы для стилизации радио-кнопки
    const finalRadioClassName = s.radio + (className ? ' ' + className : '');
    const spanClassName = s.span + (spanProps?.className ? ' ' + spanProps.className : '');

    // Отображаем опции для радиокнопок
    const mappedOptions: any[] = options
        ? options.map((o) => (
              <label key={name + '-' + o.id} className={s.label}>
                  <input
                      id={id + '-input-' + o.id}
                      className={finalRadioClassName}
                      type={'radio'} // Указываем тип input как radio
                      name={name} // Указываем имя группы радио-кнопок
                      checked={o.id === value} // Устанавливаем выбранное значение
                      value={o.id} // Устанавливаем id как значение для радио-кнопки
                      onChange={onChangeCallback} // Привязываем обработчик изменений
                      {...restProps} // Передаем остальные пропсы
                  />
                  <span
                      id={id + '-span-' + o.id}
                      {...spanProps}
                      className={spanClassName}
                  >
                      {o.value} {/* Отображаем текст опции */}
                  </span>
              </label>
          ))
        : [];

    return <div className={s.options}>{mappedOptions}</div>;
};

export default SuperRadio;
