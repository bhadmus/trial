Cypress.Commands.add('verifyResultSet', (item) => {
    cy.fixture('elements').then((loc) => {
        cy.get(loc.resultHeader).should('be.visible')
        .invoke('text').then((newValue) => {
            const result = newValue
            expect(result).to.include('results for')
        })

        cy.get(loc.itemHeader).should('be.visible')
        .invoke('text').then((newValue) => {
            const result = newValue
            expect(result).to.include(item)
        })
    })
})