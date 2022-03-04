describe('login', () => {
  it('user should be able to login', () => {
     cy.visit('https://civey.com/');
    cy.userLogin();
  });
});
