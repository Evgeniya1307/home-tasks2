describe('HW7 SuperSelect and SuperRadio Tests', () => {
    beforeEach(() => {
        cy.visit('/path-to-your-component-page'); // Укажи путь к странице с компонентами
    });

    it('should select options and sync values between select and radio', () => {
        // Проходим по всем радио-опциям
        cy.get(`[id^=hw7-super-radio-input-]`).each(option => {
            // Получаем значение атрибута value
            const value: string | undefined = option.attr('value');
            
            // Проверка, что значение не undefined, если undefined, то используем значение по умолчанию
            cy.get('#hw7-super-select').select(value ?? ''); // Используем '??' для проверки на undefined
            
            // Проверяем, что радио-кнопка выбрана
            cy.wrap(option).should('be.checked');
            
            // Проверяем текст радио-кнопки, удаляя лишние пробелы
            const inputSelectText = option.text().trim();
            cy.get(`#hw7-super-radio-span-${value}`).should('have.text', inputSelectText);
        });
    });
});
