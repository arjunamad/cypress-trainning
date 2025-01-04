import { credentials } from '../../fixtures/credentials';// Adjust the path as necessary
describe('Login Functionality', () => {
  
  beforeEach(() => {
    // Navigate to the login page before each test
    cy.visit(credentials.loginPage);
  });

  it('verify sign in form display correctly', () => {
    cy.contains('Sign in to').should('be.visible');
  });

  it('should log in successfully with valid credentials', () => {
    // Input valid credentials
    cy.get('input[placeholder="Email"]').type(credentials.valid.email);
    cy.get('input[placeholder="Password"]').type(credentials.valid.password);
    cy.get('#kt_sign_in_submit').click({timeout:1000});
    // Verify correctly navigates to the home page after login
    cy.contains('Dashboard').should('be.visible');
  });

  it('should show an error message for invalid email', () => {
    // Input invalid email
    cy.get('input[placeholder="Email"]').type(credentials.invalid.email);
    cy.get('input[placeholder="Password"]').type(credentials.valid.password);
    cy.get('#kt_sign_in_submit').click();
    // Verify error message displays correctly
    cy.contains('Incorrect Credentials for user').should('be.visible');
  });

  it('should show an error message for invalid password', () => {
    // Input invalid password
    cy.get('input[placeholder="Email"]').type(credentials.valid.email);
    cy.get('input[placeholder="Password"]').type(credentials.invalid.password);
    cy.get('#kt_sign_in_submit').click();
    // Verify error message displays correctly
    cy.contains('Password is required').should('be.visible');
  });

  it('verify forget password is visible', () => {
    cy.contains('Forgot Password ').should('be.visible');
  });
});