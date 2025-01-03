// cypress/support/commands.js
Cypress.Commands.add('login', (email, password) => {
  cy.visit('https://connectqas.ad-astrainc.com/');
  cy.get('input[placeholder="Email"]').type(email);
  cy.get('input[placeholder="Password"]').type(password);
  cy.get('#kt_sign_in_submit').click({ timeout: 1000 });
  //cy.contains('Dashboard').should('be.visible'); // Ensure login is successful
});
