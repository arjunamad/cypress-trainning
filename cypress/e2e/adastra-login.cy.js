
describe('Login Functionality', () => {
  
    beforeEach(() => {
      // Navigate to the login page before each test
      cy.visit('https://connectqas.ad-astrainc.com/');
    });

    it('verify sign in form display correctly', () => {
       
      cy.contains('Sign in to').should('be.visible');
    });
  
    it('should log in successfully with valid credentials', () => {
      // Input valid credentials
      cy.get('input[placeholder="Email"]').type('gevanjayasinghe@ad-astrainc.com');
      cy.get('input[placeholder="Password"]').type('Qazwsx@123');
      cy.get('#kt_sign_in_submit').click({timeout:1000});
      // verify correctly navigate to the the home page after login 
      cy.contains('Dashboard').should('be.visible');
    });

    it('should show an error message for invalid email', () => {
      // Input invalid credentials
      cy.get('input[placeholder="Email"]').type('gevanjayasinghedfd@ad-astrainc.com');
      cy.get('input[placeholder="Password"]').type('Qazwsx@123');
      cy.get('#kt_sign_in_submit').click();
      // verify error message display correctly
      cy.contains('Incorrect Credentials for user').should('be.visible');
     
    });
    it('should show an error message for invalid password', () => {
      // Input invalid credentials
      cy.get('input[placeholder="Email"]').type('gevanjayasinghedfd@ad-astrainc.com');
      cy.get('#kt_sign_in_submit').click();
      // verify error message display correctly
      cy.contains('Password is required').should('be.visible');
     
    });

    it('verify foget password is visible', () => {
       cy.contains('Forgot Password ').should('be.visible');
    });
  
   
  });
  