import { credentials } from '../../fixtures/credentials'; // Adjust the path as necessary
import '../../support/commands';   // Correct path to commands.js



describe('Dashboard Functionality', () => {
  beforeEach(() => {
    // Log in before each test
    cy.login(credentials.valid.email, credentials.valid.password);
  });

  it('should log in successfully with valid credentials', () => {
    // After login, verify the dashboard is visible
    cy.contains('Dashboard').should('be.visible');
  });
});
