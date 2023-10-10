describe("Mero Share Apply Share", () => {
  beforeEach(() => {
    cy.visit('https://meroshare.cdsc.com.np/#/login');
  });

  it("should perform login and apply for each user", () => {
    // Load the company details from the fixture
    cy.fixture("companyDetails.json").then((data) => {

      // Load the user data from the fixture
      cy.fixture('meroUser.json').then((users) => {
        users.forEach((user) => {
          cy.contains("Select your DP").click();
          cy.get(".select2-search__field").should('be.visible').type(user.bank);
          cy.get(".select2-results").click();
          cy.get("#username").type(user.user);
          cy.get("#password").type(user.pwd);
          cy.contains("Login").click();

          // Additional steps after login if needed
          // For example, you can add assertions to verify successful login
          // or navigate to other pages within the application.

          cy.contains("My ASBA").should("be.visible").click();

          // Find and apply for companies based on company details
          cy.get('.company-list .company-name').each((companyNameElement) => {
            cy.wrap(companyNameElement).invoke('text').then((companyName) => {



              if (companyName.includes(data.companyName)) {
                cy.wrap(companyNameElement).parent().next().find('.btn-issue').click();

                cy.get('#selectBank').then(($selectBank) => {

              // Check if #selectBank exists before selecting
              if ($selectBank.is('select')) {
                cy.get("#selectBank").select(user.selectBank);
                cy.get("#appliedKitta").type(user.appliedKitta);
                cy.get("#crnNumber").type(user.crnNumber);
                cy.get("#disclaimer").click();
                cy.contains("Proceed").click();
                cy.get("#transactionPIN").type(user.transactionPIN);
                cy.get(".confirmation-message").click();
                cy.get(".confirm-page-btn").click();
                cy.wait(2000);
                cy.get('.confirm-page-btn .btn-primary').click();
              } else {
                // If #selectBank doesn't exist, skip the rest of the code for this user
                return;
              }

            });



              }



            });
          });

          // Logout the user
          cy.wait(1000);
          cy.get('.nav-link.header-menu__link').click();
          cy.wait(2000);
        });
      });
    });
  });
});
