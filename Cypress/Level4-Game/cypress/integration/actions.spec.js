describe("UI Tests", () => {

    beforeEach(() => {
        cy.visit("https://example.cypress.io/commands/actions");
    });

    it("Should clear the input web element", () => {
        cy.get('.action-email').type("leo@gmail.com");
        cy.get('.action-email').clear();
        cy.get('.action-email').should('have.value', '');
    });

    it("Should double click the element", () => {
        cy.get('.action-div').dblclick().should('not.be.visible').should("have.value", "");

        cy.get('.action-input-hidden').should('be.visible');
            
    });

    it("Check a check box", () => {
        cy.get('.action-checkboxes [type="checkbox"]')
        .check(["checkbox1", "checkbox3"])
        .should("be.checked")
    });

    it("Should select first radio button", () => {

    cy.get('.action-radios [type="radio"]')
        .check('radio1', { force: true })
        .should('be.checked')

    });

});

