class homePage {
  elements = {
    //Buttons
    aboutUsBtn: () => cy.get('a').contains('About us'),
    cartBtn: () => cy.get('#cartur'),
    categoriesBtn: () => cy.get('#cat'),
    contactBtn: () => cy.get('a').contains('Contact'),
    phonesBtn: () => cy.get('a').contains('Phoens'),
    homeBtn: () => cy.get('a').contains('Home'),
    laptopsBtn: () => cy.get('a').contains('Laptops'),
    logInBtn: () => cy.get('#login2'),
    logoutBtn: () => cy.get('#logout2'),
    monitorsBtn: () => cy.get('a').contains('Monitors'),
    nameOfUserBtn: () => cy.get('#nameofuser'),
    nextpBtn: () => cy.get('Next'),
    previousBtn: () => cy.get('button').contains('Previous'),
    signUpBtn: () => cy.get('#signin2'),

    //others
    cardItem: () => cy.get('.card-title').eq(0),
  };

  clickAboutUsBtn() {
    this.elements.aboutUsBtn().click();
  }

  clickCartBtn() {
    this.elements.cartBtn().click();
  }

  clickCategoriesBtn() {
    this.elements.categoriesBtn().click();
  }

  clickContactBtn() {
    this.elements.contactBtn().click();
  }

  clickPhonesBtn() {
    this.elements.phonesBtn().click();
  }

  clickHomeBtn() {
    this.elements.homeBtn().click();
  }

  clickLaptopsBtn() {
    this.elements.laptopsBtn().click();
  }

  clickLoginBtn() {
    this.elements.logInBtn().click();
  }

  clickLogoutBtn() {
    this.elements.logoutBtn().click();
  }

  clickMonitorsBtn() {
    this.elements.monitorsBtn().click();
  }

  clickNextBtn() {
    this.elements.nextpBtn().click();
  }

  clickPreviousBtn() {
    this.elements.previousBtn().click();
  }

  clickSignUpBtnBtn() {
    this.elements.signUpBtn().click();
  }
}
export default homePage;
