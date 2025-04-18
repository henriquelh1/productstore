class cartPage {
  elements = {
    //Inputs
    cityInput: () => cy.get('#city'),
    countryInput: () => cy.get('#country'),
    creditCardInput: () => cy.get('#card'),
    monthInput: () => cy.get('#month'),
    nameInput: () => cy.get('#name'),
    yearInput: () => cy.get('#year'),

    //Buttons
    addToCartBtn: () => cy.get('a').contains('Add to cart'),
    closeBtn: () => cy.get('button').contains('Close'),
    deleteBtn: () => cy.get('a').contains('Delete'),
    okBtn: () => cy.get('button').contains('Ok'),
    placeOrderBtn: () => cy.get('button').contains('Place Order'),
    purchaseBtn: () => cy.get('button').contains('Purchase'),
  };

  typeName(name) {
    this.elements.nameInput().clear().type(name);
  }

  typeCountry(country) {
    this.elements.countryInput().clear().type(country);
  }

  typeCity(city) {
    this.elements.cityInput().clear().type(city);
  }

  typeCreditCard(card) {
    this.elements.creditCardInput().clear().type(card);
  }

  typeMonth(month) {
    this.elements.monthInput().clear().type(month);
  }

  typeYear(year) {
    this.elements.yearInput().clear().type(year);
  }

  clickAddToCartBtn() {
    this.elements.addToCartBtn().click();
  }

  clickDeleteBtn() {
    this.elements.deleteBtn().click();
  }

  clickPlaceOrderBtn() {
    this.elements.placeOrderBtn().click();
  }

  clickOkBtn() {
    this.elements.okBtn().click();
  }

  clickCloseBtn() {
    this.elements.closeBtn().click();
  }

  clickPurchaseBtn() {
    this.elements.purchaseBtn().click();
  }
}
export default cartPage;
