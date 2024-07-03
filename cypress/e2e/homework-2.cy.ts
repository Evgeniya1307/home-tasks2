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
});
