describe("Mero Share Apply Share " ,()=>{

   it("Login_Details",()=>{
            cy.visit('https://meroshare.cdsc.com.np/#/login')
            cy.contains("Select your DP").click()
            cy.wait(2000)
            cy.get(".select2-search__field").should('be.visible').type("KUMARI BANK LIMITED (15200)")
            cy.wait(2000)
            cy.get(".select2-results").click()
            cy.get("#username").type("159751")
            cy.get("#password").type("Hari123#@")
            cy.contains("Login").click()



            cy.contains("My ASBA").should("be.visible").click()
          // Find all the company elements within the company-list
            cy.get('.company-list .company-name').each((companyNameElement) => {
                // Get the text content of the company name element
                cy.wrap(companyNameElement).invoke('text').then((companyName) => {
                // Check if the company name matches 'Himalayan 80-20'
                if (companyName.includes("Himalayan 80-20")) {
                    // Click the 'Apply' button within the current company element
                    cy.wrap(companyNameElement).parent().next().find('.btn-issue').click();
                }
                });

      });
    
    //   cy.get("#selectBank").select("KUMARI BANK LTD.")
      cy.get("#appliedKitta").type("100")
      cy.get("#crnNumber").type("0580053385400001")
      cy.get("#disclaimer").click()

      cy.contains("Proceed").click()
      cy.get("#transactionPIN").type("1234")
      cy.get(".confirmation-message").click()
      cy.get(".confirm-page-btn").click()
    //   cy.get('.btn-primary[disabled]').click({ force: true });
       cy.wait(2000)
    cy.get('.confirm-page-btn .btn-primary').click();



        cy.wait(2000)
        cy.get('.nav-link.header-menu__link').click();
    
    })
 

})