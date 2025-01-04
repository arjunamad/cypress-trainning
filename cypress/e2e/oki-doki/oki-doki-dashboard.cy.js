import { credentials2 } from "../../fixtures/credentials2";
import "../../support/commands2"; // Correct path to commands.js


describe("Oki-Doki dashboard tests", () => {
  beforeEach(() => {
     // Log in before each test
     cy.login(credentials2.valid.email, credentials2.valid.password);
   });
  it("Verify dashboard visible sucessfully", () => {
    cy.get("#kt_app_toolbar_container").should("contain", "Dashboard");
  });
});
