
Cypress.Commands.add('searchAnItem', (item) => {
    cy.fixture('elements').then((loc) => {
        cy.get(loc.textBox).should('be.visible').type(item)
    })
})

Cypress.Commands.add('clickSearchButton', () => {
    cy.fixture('elements').then((loc) => {
        cy.get(loc.searchButton).should('be.visible').click()
    })
})