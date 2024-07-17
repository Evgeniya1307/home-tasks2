// Импортируем типы из Cypress
/// <reference types="cypress" />

export {}; // Добавляет экспорт, чтобы TypeScript считал файл модулем

describe('Homework 2', () => {
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
      cy.get('#hw4-super-checkbox-like-old')
        .should('exist')
        .check({ force: true }) // Принудительно отмечаем чекбокс
        .should('be.checked'); // Проверяем, что чекбокс отмечен
    });

    it('should uncheck the second checkbox', () => {
      // Получаем второй checkbox и проверяем, что он существует
      cy.get('#hw4-super-checkbox-with-text')
        .should('exist')
        .uncheck({ force: true }) // Принудительно снимаем отметку с чекбокса
        .should('not.be.checked'); // Проверяем, что чекбокс не отмечен
    });
  });
});

