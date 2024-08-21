// describe('Homework 4', () => {
  before(() => {
    cy.visit('/'); // Загрузка страницы перед началом тестов
  });
  
  // Тестирование чекбоксов
  describe('Checkbox testing', () => {
    it('should check the first checkbox', () => {
      cy.get('#hw4-super-checkbox-with-text')
        .should('exist')
        .should('be.visible') // Убеждаемся, что чекбокс виден
        .check({ force: true }) // Принудительно отмечаем чекбокс
        .should('be.checked'); // Проверяем, что чекбокс отмечен
    });
  
    it('should uncheck the second checkbox', () => {
      cy.get('#hw4-super-checkbox-like-old')
        .should('exist')
        .should('be.visible') // Убеждаемся, что чекбокс виден
        .uncheck({ force: true }) // Принудительно снимаем отметку с чекбокса
        .should('not.be.checked'); // Проверяем, что чекбокс не отмечен
    });
  });
  
  // Другие тесты
  it('should include all kinds of priorities (low, middle, high)', () => {
    const priorities: string[] = []; // Явно указываем тип переменной как массив строк
    cy.get('[id^=hw2-priority-]').each((element) => {
      cy.wrap(element).invoke('text').then((text: string) => {
        priorities.push(text.trim());
      });
    }).then(() => {
      expect(priorities.includes('high') && priorities.includes('middle') && priorities.includes('low')).to.be.true;
    });
  });
  
  describe('SuperInputText tests', () => {
    it('should have the same value in the second input as the first one', () => {
      const someText = 'some text'; // Текст для проверки
      cy.get('#hw4-super-input-with-error') // Находим первый инпут
        .type(someText) // Вводим текст
        .should('have.value', someText); // Проверяем, что текст был введен
  
      cy.get('#hw4-super-input-like-old') // Находим второй инпут
        .should('have.value', someText); // Проверяем, что текст совпадает
    });
  
    it('should clear both inputs when pressing enter on the second input', () => {
      cy.get('#hw4-super-input-like-old') // Находим второй инпут
        .type('{enter}') // Нажимаем Enter
        .should('have.value', ''); // Проверяем, что инпут очищен
  
      cy.get('#hw4-super-input-with-error') // Проверяем первый инпут
        .should('have.value', ''); // Проверяем, что инпут очищен
    });
  
    it('should show error input class when pressing enter on an empty input', () => {
      cy.get('#hw4-super-input-with-error') // Находим первый инпут
        .clear() // Очищаем инпут
        .type('{enter}') // Нажимаем Enter
        .should('have.class', 'errorInput'); // Проверяем, что инпут имеет класс ошибки 
    });
  });
  