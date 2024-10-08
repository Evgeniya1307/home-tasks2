describe('Checkbox testing', () => {
  it('should check the first checkbox', () => {
    cy.get('#hw4-super-checkbox-with-text', { timeout: 10000 })
      .should('exist')
      .should('be.visible')
      .should('not.be.checked')
      .check({ force: true })
      .should('be.checked');
  });

  it('should uncheck the second checkbox', () => {
    cy.get('#hw4-super-checkbox-like-old', { timeout: 10000 })
      .should('exist')
      .should('be.visible')
      .should('be.checked')
      .uncheck({ force: true })
      .should('not.be.checked');
  });
});
