
Cypress.Commands.add('userLogin', () =>
{
  cy.visit('https://civey.com/');
  cy.get('[href^="/login"]').contains('Anmelden').click();
  cy.get('input[type="email"]').type('nikhil.etc@gmail.com');
  cy.submit();
  cy.intercept('POST', /\/v1\/auth\/login/).as('waitForLogin');
  cy.get('input[type="password"]').type('Y3h3TYJ!eM6EkB6');
  cy.submit();
  cy.wait('@waitForLogin');
});

Cypress.Commands.add('submit', () =>
{
    cy.get('button[type="submit"]').click();
})
