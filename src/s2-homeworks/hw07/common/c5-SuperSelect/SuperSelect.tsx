import React, { SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent } from 'react';
import s from './SuperSelect.module.css';

type DefaultSelectPropsType = DetailedHTMLProps<
    SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
>;

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: any[]; // Массив вариантов для отображения
    onChangeOption?: (option: any) => void; // Функция, вызываемая при изменении значения
};

const SuperSelect: React.FC<SuperSelectPropsType> = ({
    options,
    className,
    onChange,
    onChangeOption,
    ...restProps
}) => {
    // Мапим опции для селекта
    const mappedOptions: any[] = options
        ? options.map((o) => (
              <option
                  id={'hw7-option-' + o.id}
                  className={s.option}
                  key={o.id}
                  value={o.id}
              >
                  {o.value.trim()} {/* Удаляем пробелы */}
              </option>
          ))
        : [];

    // Обработчик изменения выбранной опции
    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = Number(e.target.value); // Получить выбранное значение из события
        onChangeOption && onChangeOption(selectedValue); // Вызовите предоставленный обработчик с выбранным значением
    };

    const finalSelectClassName = s.select + (className ? ' ' + className : '');

    return (
        <select
            className={finalSelectClassName}
            onChange={onChangeCallback} // Присоединение обратного вызова onChange
            {...restProps}
        >
            {mappedOptions}
        </select>
    );
};

export default SuperSelect;
