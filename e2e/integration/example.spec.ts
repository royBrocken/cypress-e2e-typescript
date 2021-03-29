import "e2e/support/domain1"

describe("A test", () => {
  beforeEach(() => {
    //= Navigation
    cy.visit(Cypress.env('apiUrl'))
    
    //= Alias
    cy.get("h2").first().as("theShizzle")
  });

  
  //===========================================
  it("should be running on correct port", () => {
    cy.location("port").should("contain", "4200")
    cy.farts("1", "2")
  })
  
  it("should fill in login", () => {
    cy.login("joe", "pwd123")
  })

  it("should contain a classy h2", () => {
    // = Chai like assertions, but within a string: "to.equal", "to.be.less.than", etc
    cy.get("h2").should("have.class", "classy")
  })

  it("should show The Stuff when button is clicked", () => {
    cy.get("[data-cy=showTheStuff]").click()
    cy.get("h1").should("be.visible")
  })
    
  //= Test data fixture for mock data
  it("should enter and show correct data in name input", () => {
    //= need async 'then' when accessing fixture files
    cy.fixture("example.json").then((data) => {
      cy.get("[data-cy=clickMeButton]").click();
      cy.get("@theShizzle").should("contain", data.name)
    })
  })

});
