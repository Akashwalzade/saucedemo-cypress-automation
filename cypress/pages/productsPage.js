class ProductsPage {

  getAllItems() {
    return cy.get(".inventory_item");
  }

  clickAddButton(item) {
    cy.wrap(item).find("button").click();
  }

  addRandomItems(count = 3) {
    this.getAllItems().then(items => {

      const total = items.length;
      if (total < count) throw new Error("Not enough products");

      const selected = [];

      while (selected.length < count) {
        const r = Math.floor(Math.random() * total);
        if (!selected.includes(r)) {
          selected.push(r);
        }
      }

      selected.forEach(index => {
        this.clickAddButton(items[index]);
      });
    });
  }

  openCart() {
    cy.get(".shopping_cart_link").click();
  }

}

export default new ProductsPage();
