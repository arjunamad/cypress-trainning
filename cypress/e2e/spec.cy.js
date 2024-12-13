
  describe('Login Page Tests', () => {
    // Visit the login page
    beforeEach(() => {
      cy.visit('http://orel-crm-web.obs-website.as-south-210.orel.cloud/');  // Replace with your login page URL
    });
  
    it('should log in successfully with valid credentials', () => {
      // Type a valid username and password
      cy.get(':nth-child(1) > .ant-input').type('sankalpani@orelit.com');  // Replace with actual input names
      cy.get('.ant-input-affix-wrapper > .ant-input').type('3UTC4L6O');  // Replace with actual input names
      cy.get(`div[style*='border: 1px solid rgb(255, 49, 82)']`).click();   
      cy.get('.ant-menu-item-icon').should('exist');   
      });
   
      it('add a new lead', () => {
        // Type a valid username and password
        cy.get(':nth-child(1) > .ant-input').type('sankalpani@orelit.com');  // Replace with actual input names
         
        });

  
  });