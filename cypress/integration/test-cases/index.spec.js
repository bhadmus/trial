describe('a describe block', () => {
    it('Should visit amazon', () => {
        cy.fixture('elements').then((loc) => {
            cy.searchAnItem(loc.ferrari)
            cy.clickSearchButton()
            cy.verifyResultSet(loc.ferrari)
        })
    })
    it('Should visit amazon again', () => {
        cy.fixture('elements').then((loc) => {
            cy.searchAnItem(loc.iPhone)
            cy.clickSearchButton()
            cy.verifyResultSet(loc.iPhone)
        })
    })

    it('Should visit amazon the third time', () => {
        cy.fixture('elements').then((loc) => {
            cy.searchAnItem(loc.pixelPro)
            cy.clickSearchButton()
            cy.verifyResultSet(loc.pixelPro)
        })
    })
})

