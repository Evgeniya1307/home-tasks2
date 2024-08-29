describe('Checkbox testing', () => {
  it('should check the first checkbox', () => {
    cy.get('#hw4-super-checkbox-with-text', { timeout: 10000 })
      .should('exist')
      .should('be.visible')
      .should('not.be.checked') // Начальное состояние
      .check({ force: true }) // Устанавливаем
      .should('be.checked'); // Проверяем, что установлен
  });

  it('should uncheck the second checkbox', () => {
    cy.get('#hw4-super-checkbox-like-old', { timeout: 10000 })
      .should('exist')
      .should('be.visible')
      .should('be.checked') // Начальное состояние
      .uncheck({ force: true }) // Снимаем
      .should('not.be.checked'); // Проверяем, что снят
  });
});
