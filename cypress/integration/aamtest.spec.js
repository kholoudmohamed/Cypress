describe('AAM Tests',()=>{
    
    it('Navigate to Login Page',()=>{
        cy.visit('/publicsite/login')

        //Login
        cy.get('[id*="_txtLoginName"]').type('donn')
        cy.get('[id*="_txtPassword"]').type('bonds')
        cy.get('[id*="_btnLogin"]').click()

        // Assert correct user logged in
        cy.get('#liLogout>a[id*="_menuLogin_lblGreeting"]').should('have.text', 'Donn Johnston')
        cy.url().should('include','/publicsite/advisor-dashboard')

        // Navigate to Corporate Bond Detail
        cy.visit('/AAMWeb/BondOfferings/CorporateSearch.aspx')
        cy.get('[id*="_btnSearchBtm"]').click()
        cy.get('[id*="_grdResults_ctl00__0"]> td:nth-child(3)').click()

        // Assert you are in bond detail page
        cy.url().should('include','CorporateBondDetail.aspx')

        // Click on place order
        cy.get('[id*="_BondDetailHeader_placeOrderButton"]').click()
    })
 
})