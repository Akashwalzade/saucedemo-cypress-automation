class CheckoutPage {

  enterFirstName(value) {
    cy.get("#first-name").type(value);
  }

  enterLastName(value) {
    cy.get("#last-name").type(value);
  }

  enterPostalCode(value) {
    cy.get("#postal-code").type(value);
  }

  clickContinue() {
    cy.get("#continue").click();
  }

  clickFinish() {
    cy.get("#finish").click();
  }

  verifySuccessMessage() {
    cy.get(".complete-header")
      .should("have.text", "Thank you for your order!");
  }

}

export default new CheckoutPage();
