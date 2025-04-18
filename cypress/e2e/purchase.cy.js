/// <reference types="cypress" />
import Login from '../support/pageObject/loginPage';
import Home from '../support/pageObject/homePage';
import Cart from '../support/pageObject/cartPage';

const homePage = new Home();
const loginPage = new Login();
const cartPage = new Cart();

let alertShown;

describe('Puchase', () => {
  beforeEach(() => {
    cy.visit('/');
    homePage.clickLoginBtn();
    loginPage.login('user4343', '1234567890');
  });

  it('Add and remove an item from the shopping cart', () => {
    alertShown = cy.stub().as('alertShown');
    homePage.clickLaptopsBtn();
    homePage.elements.cardItem().contains('Sony').click();
    cartPage.clickAddToCartBtn();
    cy.on('window:alert', alertShown);
    cy.get('@alertShown').should('have.been.calledOnceWith', 'Product added.');
    homePage.clickCartBtn();
    cy.contains('Sony vaio i5').should('be.visible');
    cartPage.clickDeleteBtn();
    cy.contains('Sony vaio i5').should('not.exist');
  });

  it('Place an order', () => {
    alertShown = cy.stub().as('alertShown');
    homePage.clickLaptopsBtn();
    homePage.elements.cardItem().contains('Sony').click();
    cartPage.clickAddToCartBtn();
    cy.on('window:alert', alertShown);
    cy.get('@alertShown').should('have.been.calledOnceWith', 'Product added.');
    homePage.clickCartBtn();
    cy.contains('Sony vaio i5').should('exist');
    cartPage.clickPlaceOrderBtn();
    cartPage.typeName('Stuart');
    cartPage.typeCountry('Germany');
    cartPage.typeCity('Berlin');
    cartPage.typeCreditCard(12345889);
    cartPage.typeMonth('12/12');
    cartPage.typeYear(2025);
    cartPage.clickPurchaseBtn();
    cy.contains('Thank you for your purchase!').should('be.visible');
  });

  it('Place an order with empty fields', () => {
    alertShown = cy.stub().as('alertShown');
    homePage.clickLaptopsBtn();
    homePage.elements.cardItem().contains('Sony').click();
    cartPage.clickAddToCartBtn();
    homePage.clickCartBtn();
    cy.contains('Sony vaio i5').should('exist');
    cartPage.clickPlaceOrderBtn();
    cartPage.clickPurchaseBtn();
    cy.on('window:alert', alertShown);
    cy.get('@alertShown').should(
      'have.been.calledWith',
      'Please fill out Name and Creditcard.'
    );
  });

  it('Place an order with name missing', () => {
    alertShown = cy.stub().as('alertShown');
    homePage.clickLaptopsBtn();
    homePage.elements.cardItem().contains('Sony').click();
    cartPage.clickAddToCartBtn();
    homePage.clickCartBtn();
    cy.contains('Sony vaio i5').should('exist');
    cartPage.clickPlaceOrderBtn();
    cartPage.typeCountry('Germany');
    cartPage.typeCity('Berlin');
    cartPage.typeCreditCard(12345889);
    cartPage.typeMonth('12/12');
    cartPage.typeYear(2025);
    cartPage.clickPurchaseBtn();
    cy.on('window:alert', alertShown);
    cy.get('@alertShown').should(
      'have.been.calledWith',
      'Please fill out Name and Creditcard.'
    );
  });

  it('Place an order with credit card missing', () => {
    alertShown = cy.stub().as('alertShown');
    homePage.clickLaptopsBtn();
    homePage.elements.cardItem().contains('Sony').click();
    cartPage.clickAddToCartBtn();
    homePage.clickCartBtn();
    cy.contains('Sony vaio i5').should('exist');
    cartPage.clickPlaceOrderBtn();
    cartPage.typeName('Stuart');
    cartPage.typeCountry('Germany');
    cartPage.typeCity('Berlin');
    cartPage.typeMonth('12/12');
    cartPage.typeYear(2025);
    cartPage.clickPurchaseBtn();
    cy.on('window:alert', alertShown);
    cy.get('@alertShown').should(
      'have.been.calledWith',
      'Please fill out Name and Creditcard.'
    );
  });
});
