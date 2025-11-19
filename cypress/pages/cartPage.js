class CartPage {

  verifyItemsCount(count) {
    cy.get(".cart_item").should("have.length", count);
  }

  clickCheckout() {
    cy.get("#checkout").click();
  }

}

export default new CartPage();
