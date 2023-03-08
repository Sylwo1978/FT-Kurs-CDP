describe('my firs scenario', () => {
it('visit main page and click top menu button', function(){
    cy.visit('http://fabrykatestow.pl')
    cy.get('#nv-primary-navigation-main').contains('Newsletter').click()
    cy.url().should('eq', 'https://fabrykatestow.pl/ciekawostki/')

})  

})