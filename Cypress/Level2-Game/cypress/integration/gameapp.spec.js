    describe("UI Tests", () => {

	it("Load the login page correctly", () => {

        cy.visit("http://localhost:3000");
        cy.get('[data-cy=login-text]').should("be.visible" );
        cy.get('[data-cy=Email]').should("have.length", 1);
        cy.get('[data-cy=Email2]').should("have.length",0);

        cy.get('[data-cy=Email]').type("leo@gmail.com");
        cy.get('[data-cy=Password]').type("123456");
        cy.get('[data-cy=Button]').click();
        cy.get('[data-cy=HomeGame]').should("have.length",1);
	})

})
