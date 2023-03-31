describe('my firs scenario', () => {
it('visit main page and click top menu button', function(){
    cy.visit('http://fabrykatestow.pl')
   cy.get('.elementor-element-3e23768 > .elementor-widget-container > .elementor-button-wrapper > .elementor-button-link').click()
   cy.get('.elementor-element-2d7d28f4 > .elementor-background-overlay').scrollIntoView()
   cy.screenshot({capture: 'viewport'})


})  

})