//= Typings for custom commands go here.
declare namespace Cypress {
  interface Chainable {
    farts(username: string, pwd: string): void,
  }
}

//= Custom commands
Cypress.Commands.add('farts', (username: string, pwd: string) => {
  cy.log("FARTS!")
  cy.visit(Cypress.env('apiUrl'))
  cy.get("[data-cy=userIdInput]").type(username);
  cy.get("[data-cy=passwordInput]").type(pwd);
  cy.get("[data-cy=loginButton").click();
})
