/// <reference types="cypress" />
import Login from '../support/pageObject/loginPage';
import Home from '../support/pageObject/homePage';

const homePage = new Home();
const loginPage = new Login();

let alertShown;

describe('Login', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Valid Login', () => {
    homePage.clickLoginBtn();
    loginPage.typeUsername('user4343');
    loginPage.typePassword('1234567890');
    loginPage.clickLoginSubmitBtn();
    homePage.elements.nameOfUserBtn().should('be.visible');
  });

  it('Invalid Login - wrong username and password', () => {
    alertShown = cy.stub().as('alertShown');
    homePage.clickLoginBtn();
    loginPage.typeUsername('user43433');
    loginPage.typePassword('12345678900');
    loginPage.clickLoginSubmitBtn();
    cy.on('window:alert', alertShown);
    cy.get('@alertShown').should(
      'have.been.calledOnceWith',
      'User does not exist.'
    );
  });

  it('Invalid Login - wrong username only', () => {
    alertShown = cy.stub().as('alertShown');
    homePage.clickLoginBtn();
    loginPage.typeUsername('user43433');
    loginPage.typePassword('1234567890');
    loginPage.clickLoginSubmitBtn();
    cy.on('window:alert', alertShown);
    cy.get('@alertShown').should(
      'have.been.calledOnceWith',
      'User does not exist.'
    );
  });

  it('Invalid Login - wrong password only', () => {
    alertShown = cy.stub().as('alertShown');
    homePage.clickLoginBtn();
    loginPage.typeUsername('user4343');
    loginPage.typePassword('12345678900');
    loginPage.clickLoginSubmitBtn();
    cy.on('window:alert', alertShown);
    cy.get('@alertShown').should('have.been.calledOnceWith', 'Wrong password.');
  });

  it('Invalid Login - empty fields', () => {
    alertShown = cy.stub().as('alertShown');
    homePage.clickLoginBtn();
    loginPage.clickLoginSubmitBtn();
    cy.on('window:alert', alertShown);
    cy.get('@alertShown').should(
      'have.been.calledOnceWith',
      'Please fill out Username and Password.'
    );
  });

  it('Invalid Login - empty password only', () => {
    alertShown = cy.stub().as('alertShown');
    homePage.clickLoginBtn();
    loginPage.typeUsername('user4343');
    loginPage.clickLoginSubmitBtn();
    cy.on('window:alert', alertShown);
    cy.get('@alertShown').should(
      'have.been.calledOnceWith',
      'Please fill out Username and Password.'
    );
  });

  it('Invalid Login - empty username only', () => {
    alertShown = cy.stub().as('alertShown');
    homePage.clickLoginBtn();
    loginPage.typePassword('12345678900');
    loginPage.clickLoginSubmitBtn();
    cy.on('window:alert', alertShown);
    cy.get('@alertShown').should(
      'have.been.calledOnceWith',
      'Please fill out Username and Password.'
    );
  });

  it('Logout', () => {
    homePage.clickLoginBtn();
    loginPage.typeUsername('user4343');
    loginPage.typePassword('1234567890');
    loginPage.clickLoginSubmitBtn();
    homePage.clickLogoutBtn();
    homePage.elements.nameOfUserBtn().should('not.be.visible');
  });
});
