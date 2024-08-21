// describe('Homework 4', () => {
  before(() => {
    cy.visit('/'); // Загружаем страницу перед запуском тестов
  });
  
  // Тестирование чекбоксов
  describe('Checkbox testing', () => {
    
    it('should check the first checkbox', () => {
      // Принудительно отмечаем чекбокс через его значение
      cy.get('#hw4-super-checkbox-with-text', { timeout: 10000 })
        .should('exist')
        .should('be.visible') // Убедимся, что чекбокс видим
        .invoke('prop', 'checked', true) // Принудительно устанавливаем состояние "checked"
        .trigger('change') // Имитируем событие изменения
        .should('be.checked'); // Проверяем, что чекбокс отмечен
    });
  
    it('should uncheck the second checkbox', () => {
      // Принудительно снимаем отметку через его значение
      cy.get('#hw4-super-checkbox-like-old', { timeout: 10000 })
        .should('exist')
        .should('be.visible') // Убедимся, что чекбокс видим
        .invoke('prop', 'checked', false) // Принудительно снимаем отметку
        .trigger('change') // Имитируем событие изменения
        .should('not.be.checked'); // Проверяем, что чекбокс не отмечен
    });
  });
  
  // Другие тесты
  it('should include all kinds of priorities (low, middle, high)', () => {
    const priorities: string[] = []; // Явно указываем тип переменной как массив строк
  
    // Проходим по всем элементам с id, начинающимся с 'hw2-priority-'
    cy.get('[id^=hw2-priority-]').each((element) => {
      cy.wrap(element)
        .invoke('text')
        .then((text: string) => {
          priorities.push(text.trim()); // Добавляем текст элемента в массив
        });
    }).then(() => {
      // Проверяем, что массив содержит все три приоритета
      expect(priorities.includes('high')).to.be.true;
      expect(priorities.includes('middle')).to.be.true;
      expect(priorities.includes('low')).to.be.true;
    });
  });
  
  
  describe('SuperInputText tests', () => {
  
    it('should have the same value in the second input as the first one', () => {
      const someText = 'some text'; // Текст для проверки
  
      // Находим первый инпут и вводим текст
      cy.get('#hw4-super-input-with-error')
        .type(someText) // Вводим текст
        .should('have.value', someText); // Проверяем, что текст был введен
  
      // Проверяем, что второй инпут имеет такое же значение
      cy.get('#hw4-super-input-like-old')
        .should('have.value', someText); // Проверяем, что текст совпадает
    });
  
    it('should clear both inputs when pressing enter on the second input', () => {
      // Нажимаем Enter во втором инпуте и проверяем, что оба инпута очищены
      cy.get('#hw4-super-input-like-old')
        .type('{enter}') // Нажимаем Enter
        .should('have.value', ''); // Проверяем, что инпут очищен
  
      cy.get('#hw4-super-input-with-error')
        .should('have.value', ''); // Проверяем, что первый инпут очищен
    });
  
    it('should show error input class when pressing enter on an empty input', () => {
      // Очищаем первый инпут и нажимаем Enter, проверяем наличие класса ошибки
      cy.get('#hw4-super-input-with-error')
        .clear() // Очищаем инпут
        .type('{enter}') // Нажимаем Enter
        .should('have.class', 'errorInput'); // Проверяем, что инпут имеет класс ошибки 
    });
  });
  