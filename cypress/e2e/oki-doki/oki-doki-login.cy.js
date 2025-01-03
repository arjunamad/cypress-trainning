import { credentials2 } from '../../fixtures/credentials2';
describe('Oki-Doki Login Functionality', () => {

  beforeEach(() => {
    // Navigate to the login page before each test
    cy.visit(credentials2.loginPage);
  });

  it('verify sign in form display correctly', () => {

    cy.contains('OKI-DOKI Lanka').should('be.visible');
  });

  it('verify  login with correct credentials ', () => {
    cy.get(`[name="emailUserName"]`).type(credentials2.valid.email);
    cy.get(`[name="password"]`).type(credentials2.valid.password);
    cy.get('#kt_sign_in_submit').click();
    cy.get('#kt_app_toolbar_container').should('contain', 'Dashboard');

  });
  it('verify login with incorrect credentials', () => {
    cy.get(`[name="emailUserName"]`).type(credentials2.invalid.email);
    cy.get(`[name="password"]`).type(credentials2.invalid.password);  // Corrected line
    cy.get('#kt_sign_in_submit').click();
    cy.contains('No Accounts Registered').should('be.visible');
  });

  it('verify forget password functioning ', () => {
    cy.contains('Forgot Password').click();
    cy.get('#kt_login_password_reset_form').should('be.visible');
    cy.get(`[name="emailUserName"]`).should('be.visible');
  });








});
