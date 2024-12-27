
describe('Oki-Doki Login Functionality', () => {
  
    beforeEach(() => {
      // Navigate to the login page before each test
      cy.visit('https://okidokiqa.overleap.lk/auth');
    });

    it('verify sign in form display correctly', () => {
       
      cy.contains('OKI-DOKI Lanka').should('be.visible');
    });
  
     
  
  
  });
  