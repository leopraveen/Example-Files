describe("UI Tests", () => {

    beforeEach(() => {
        cy.visit("http://localhost:3000");
    })

    it("Load the login page correctly", () => {
        cy.get('[data-cy=login-text]').should("have.length", 1)
        cy.get('[data-cy=login-text]').should("be.visible")
    })

    it("Check login doesnt work without username", () => {
        cy.get('[data-cy=Password]').type("123456");
        cy.get('[data-cy=Button]').click;
        // Check if we are still in the login page
        cy.get('[data-cy=login-text]').should("have.length", 1);
        cy.get('[data-cy=HomeGame]').should("have.length",0);
    })

    it("Check login doesnt work without password", () => {
        cy.get('[data-cy=Email]').type("leo@gmail.com");
        cy.get('[data-cy=Button]').click;
        // Check if we are still in the login page
        cy.get('[data-cy=login-text]').should("have.length", 1);
        cy.get('[data-cy=HomeGame]').should("have.length",0);
    })

    it("Check login doesnt work without password", () => {
        cy.get('[data-cy=Email]').type("leo@gmail.com");
        cy.get('[data-cy=Password]').type("123456");
        cy.get('[data-cy=Button]').click();
        // Check if we are still in the login page
        cy.get('[data-cy=login-text]').should("have.length", 0);
        cy.get('[data-cy=HomeGame]').should("have.length",1);
        cy.get('[data-cy=logout]').should("be.visible");
        cy.get('[data-cy=logout]').should("have.class", "btn-success");
        cy.get('[data-cy=logout]').should("not.have.class", "nothing");

    })
    it("Should have the correct values in input fileds", () => {
        cy.get('[data-cy=Email]').type("leo@gmail.com");
        cy.get('[data-cy=Email]').should("have.value", "leo@gmail.com");
        cy.get('[data-cy=Password]').type("123456");
        cy.get('[data-cy=Password]').should("have.value", "123456");
        cy.get('[data-cy=Password]').should("not.have.value", "dummy")
    })

    it("Should logout correctly", () => {
        cy.get('[data-cy=Email]').type("leo@gmail.com");
        cy.get('[data-cy=Password]').type("123456");
        cy.get('[data-cy=Button]').click();
        // Now Logout and see if its logged out
        cy.get('[data-cy=logout]').click();
        cy.get('[data-cy=logout-text]').should("contain", "Logged out of the game console")
        // cy.wait(1000); sleep 1 second
        cy.get('[data-cy=logout-text]').should("not.contain", "Dummy")
    })

    // it("should make a test fail", () => {
    //     cy.get('[data-cy=zzzz]').should("exist");
    // })
})