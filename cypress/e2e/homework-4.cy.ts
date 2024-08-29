/// <reference types="cypress" />

export {}; // Добавляем экспорт, чтобы TypeScript считал файл модулем

describe('Homework 4', () => {
  // Перед всеми тестами загрузим страницу
  before(() => {
    cy.visit('/');
  });

  // Тестирование чекбоксов
  describe('Checkbox testing', () => {
    // Проверка первого чекбокса
    it('should check the first checkbox', () => {
      cy.get('#hw4-super-checkbox-with-text')
        .should('exist') // Проверяем, что чекбокс существует
        .should('be.visible') // Проверяем, что он видим
        .should('not.be.checked') // Проверяем, что он не отмечен по умолчанию
        .check({ force: true }) // Отмечаем чекбокс принудительно
        .should('be.checked'); // Проверяем, что чекбокс отмечен
    });

    // Проверка второго чекбокса
    it('should uncheck the second checkbox', () => {
      cy.get('#hw4-super-checkbox-like-old')
        .should('exist') // Проверяем, что чекбокс существует
        .should('be.visible') // Проверяем, что он видим
        .should('be.checked') // Проверяем, что он отмечен по умолчанию
        .uncheck({ force: true }) // Снимаем отметку с чекбокса принудительно
        .should('not.be.checked'); // Проверяем, что чекбокс не отмечен
    });
  });

  // Тесты для приоритетов (пример)
  it('should include all kinds of priorities (low, middle, high)', () => {
    const priorities: string[] = [];
    cy.get('[id^=hw2-priority-]').each((element: JQuery<HTMLElement>) => {
      cy.wrap(element).invoke('text').then((text: string) => {
        priorities.push(text.trim());
      });
    }).then(() => {
      expect(priorities.includes('high') && priorities.includes('middle') && priorities.includes('low')).to.be.true;
    });
  });
});
