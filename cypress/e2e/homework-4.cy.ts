describe('Checkbox testing', () => {
  it('should check the first checkbox', () => {
    cy.get('#hw4-super-checkbox-with-text')
      .should('exist')
      .should('not.be.checked')
      .click()  // Используем клик вместо check
      .should('be.checked');
  });

  it('should uncheck the second checkbox', () => {
    cy.get('#hw4-super-checkbox-like-old')
      .should('exist')
      .should('be.checked')
      .click()  // Используем клик вместо uncheck
      .should('not.be.checked');
  });
});
