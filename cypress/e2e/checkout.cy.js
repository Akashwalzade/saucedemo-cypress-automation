///<reference types="cypress"/>





import login from "../pages/loginPage";
import products from "../pages/productsPage";
import cart from "../pages/cartPage";
import checkout from "../pages/checkoutPage";


describe("SauceDemo – Random Item Checkout", () => {

  it("Select 3 random items and complete checkout", () => {

    // Login
    login.visit();
    login.login();

    cy.url().should("contain", "inventory.html");

    // Add 3 random items
    products.addRandomItems(3);

    // Assert cart badge
    cy.get(".shopping_cart_badge").should("contain", "3");

    // Go to cart
    products.openCart();

    // Assert cart items count
    cart.verifyItemsCount(3);

    // Checkout
    cart.clickCheckout();

    checkout.enterFirstName("Akash");
    checkout.enterLastName("Walzade");
    checkout.enterPostalCode("412101");
    checkout.clickContinue();

    checkout.clickFinish();

    // Final assertion
    checkout.verifySuccessMessage();
  });
});
