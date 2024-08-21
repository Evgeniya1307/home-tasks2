// describe('Homework 4', () => {
  before(() => {
    cy.visit('/'); // Загружаем страницу перед запуском тестов
  });
  
  // Тестирование чекбоксов
  describe('Checkbox testing', () => {
  
    it('should check the first checkbox', () => {
      cy.get('#hw4-super-checkbox-with-text')
        .should('exist') // Убеждаемся, что чекбокс существует
        .should('be.visible') // Убеждаемся, что чекбокс виден на странице
        .should('not.be.checked') // Проверяем начальное состояние (чекбокс не отмечен)
        .then(($el) => {
          const element = $el[0] as HTMLInputElement; // Явно указываем тип элемента
          element.checked = true; // Принудительно отмечаем чекбокс
          cy.wrap($el).trigger('change'); // Запускаем событие изменения для реактивного обновления
        })
        .should('be.checked'); // Проверяем, что чекбокс теперь отмечен
    });
  
    it('should uncheck the second checkbox', () => {
      cy.get('#hw4-super-checkbox-like-old')
        .should('exist') // Убеждаемся, что чекбокс существует
        .should('be.visible') // Убеждаемся, что чекбокс виден на странице
        .should('be.checked') // Проверяем начальное состояние (чекбокс отмечен)
        .then(($el) => {
          const inputElement = $el[0] as HTMLInputElement; // Явно указываем тип как HTMLInputElement
          inputElement.checked = false; // Принудительно снимаем отметку
          cy.wrap($el).trigger('change'); // Запускаем событие изменения для реактивного обновления
        })
        .should('not.be.checked'); // Проверяем, что чекбокс теперь не отмечен
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
  });
  
  // Тестирование SuperInputText
  describe('SuperInputText tests', () => {
  
    it('should have the same value in the second input as the first one', () => {
      const someText = 'some text'; // Текст для проверки
  
      // Находим первый инпут и вводим текст
      cy.get('#hw4-super-input-with-error')
        .type(someText)
        .should('have.value', someText); // Проверяем, что текст был введен
  
      // Проверяем, что второй инпут имеет такое же значение
      cy.get('#hw4-super-input-like-old')
        .should('have.value', someText);
    });
  
    it('should clear both inputs when pressing enter on the second input', () => {
      // Нажимаем Enter во втором инпуте и проверяем, что оба инпута очищены
      cy.get('#hw4-super-input-like-old')
        .type('{enter}')
        .should('have.value', ''); // Проверяем, что второй инпут очищен
  
      cy.get('#hw4-super-input-with-error')
        .should('have.value', ''); // Проверяем, что первый инпут тоже очищен
    });
  
    it('should show error input class when pressing enter on an empty input', () => {
      // Очищаем первый инпут и нажимаем Enter, проверяем наличие класса ошибки
      cy.get('#hw4-super-input-with-error')
        .clear()
        .type('{enter}')
        .should('have.class', 'errorInput');
    });
  });
  