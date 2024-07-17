// Импортируем типы из Cypress
/// <reference types="cypress" />

export {}; // Добавляет экспорт, чтобы TypeScript считал файл модулем

describe('Homework 4', () => {
  before(() => {
    cy.visit('/'); // Теперь Cypress будет использовать baseUrl из cypress.config.ts
  });

  it('should include all kinds of priorities (low, middle, high)', () => {
    const priorities: string[] = []; // Явно указываем тип переменной priorities как массив строк
    cy.get('[id^=hw2-priority-]').each((element: JQuery<HTMLElement>) => {
      cy.wrap(element).invoke('text').then((text: string) => {
        priorities.push(text.trim());
      });
    }).then(() => {
      expect(priorities.includes('high') && priorities.includes('middle') && priorities.includes('low')).to.be.true;
    });
  });

  // Добавляем новые тесты для проверки состояния checkbox-ов
  describe('Checkbox testing', () => {
    it('should check the first checkbox', () => {
      // Получаем первый checkbox и проверяем, что он существует
      cy.get('#hw4-super-checkbox-with-text')
        .should('exist')
        .check({ force: true }) // Принудительно отмечаем чекбокс
        .should('be.checked'); // Проверяем, что чекбокс отмечен
    });

    it('should uncheck the second checkbox', () => {
      // Получаем второй checkbox и проверяем, что он существует
      cy.get('#hw4-super-checkbox-like-old')
        .should('exist')
        .uncheck({ force: true }) // Принудительно снимаем отметку с чекбокса
        .should('not.be.checked'); // Проверяем, что чекбокс не отмечен
    });
  });

  // Проверка инпутов в Homework 4
  describe('SuperInputText tests', () => {
    it('should have the same value in the second input as the first one', () => {
      cy.get('#hw4-super-input-like-old')
        .type('some text')
        .should('have.value', 'some text');

      cy.get('#hw4-super-input-with-error')
        .should('have.value', 'some text');
    });

    it('should clear both inputs when pressing enter on the second input', () => {
      cy.get('#hw4-super-input-with-error')
        .type('some text{enter}')
        .should('have.value', '');

      cy.get('#hw4-super-input-like-old')
        .should('have.value', '');
    });

    it('should show error input class when pressing enter on an empty input', () => {
      cy.get('#hw4-super-input-with-error')
        .clear()
        .type('{enter}')
        .should('have.class', 'errorInput');
    });
  });
});
