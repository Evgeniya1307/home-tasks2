// describe('Homework 4', () => {
  before(() => {
    cy.visit('/'); // Загружаем страницу перед запуском тестов
  });
  
  // Тестирование чекбоксов
  describe('Checkbox testing', () => {
    it('should check the first checkbox', () => {
      cy.get('#hw4-super-checkbox-with-text')
        .should('exist')
        .should('be.visible')
        .should('not.be.checked') // Проверяем начальное состояние
        .check({ force: true }) // Используем стандартный метод check с принудительным изменением
        .should('be.checked'); // Проверяем, что чекбокс отмечен
    });
  
    it('should uncheck the second checkbox', () => {
      cy.get('#hw4-super-checkbox-like-old')
        .should('exist')
        .should('be.visible')
        .should('be.checked') // Проверяем начальное состояние
        .uncheck({ force: true }) // Используем стандартный метод uncheck с принудительным изменением
        .should('not.be.checked'); // Проверяем, что чекбокс не отмечен
    });
  });
  
  // Другие тесты
  it('should include all kinds of priorities (low, middle, high)', () => {
    const priorities: string[] = []; // Явно указываем тип переменной как массив строк
  
    // Собираем все элементы с id, начинающимся с 'hw2-priority-'
    cy.get('[id^=hw2-priority-]').each((element) => {
      cy.wrap(element)
        .invoke('text')
        .then((text: string) => { // Явно указываем тип текста как строку
          priorities.push(text.trim()); // Добавляем текст в массив
        });
    }).then(() => {
      // Проверяем, что массив содержит все три приоритета
      expect(priorities).to.include('high');
      expect(priorities).to.include('middle');
      expect(priorities).to.include('low');
    });
  });
  