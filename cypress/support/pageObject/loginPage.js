class loginPage {
  elements = {
    //Inputs
    passwordInput: () => cy.get('#loginpassword'),
    usernameInput: () => cy.get('#loginusername'),

    //Buttons
    closeBtn: () => cy.get('button').contains('Log in'),
    loginSubmitBtn: () => cy.get('button').contains('Log in'),
  };

  typeUsername(username) {
    this.elements.usernameInput().clear().type(username, { delay: 0 });
  }

  typePassword(password) {
    this.elements.passwordInput().clear().type(password);
  }

  clickLoginSubmitBtn() {
    this.elements.loginSubmitBtn().click();
  }

  clickCloseBtn() {
    this.elements.closeBtn().click();
  }

  login(username, password) {
    this.typeUsername(username);
    this.typePassword(password);
    this.clickLoginSubmitBtn();
  }
}
export default loginPage;
