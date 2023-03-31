describe('my firs scenario', () => {
    it('visit main page and click top menu button', function(){
        cy.visit('http://fabrykatestow.pl')

  //  lokatory po ID 
cy.get('#wpforms-250-field_0').click
cy.get('#wpforms-250-field_1').click
cy.get('#wpforms-250-field_2').click
cy.get('#wpforms-submit-250').click

cy.get('#wpforms-250-field_0').click
cy.get('#menu-item-923').click

//class
    cy.get('.menu-item menu-item-type-post_type menu-item-object-page menu-item-923').click()
    cy.get('.menu-item menu-item-type-custom menu-item-object-custom menu-item-1023').click()
    cy.get('.menu-item menu-item-type-custom menu-item-object-custom menu-item-1692').click()
    cy.get('.menu-item menu-item-type-custom menu-item-object-custom menu-item-224').click()
    cy.get('.menu-item menu-item-type-custom menu-item-object-custom menu-item-3992').click()

//atrybut 
cy.get('input[name="wpforms[fields][0]"]').click
cy.get('input[name="wpforms[fields][1]"]').click
cy.get('input[name="wpforms[fields][2]"]').click
cy.get('id=["wpforms-250-field_0"]').click
cy.get('id=["wpforms-250-field_1"]').click
cy.get('input[name="wpforms[fields][2]"]').click

//text
cy.get('.wrap').contains('☆  Kursy').click
cy.get('.wrap').contains('Kontakt').click
cy.get('.wrap').contains('Panel kursanta').click
cy.get('.wrap').contains('Koszulki').click
cy.get('.wrap').contains('Webinary').click
    })  
    
    })