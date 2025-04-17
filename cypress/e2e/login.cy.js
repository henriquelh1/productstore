/// <reference types="cypress" />

describe('Login', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Test', () => {
    cy.contains('PRODUCT STORE');
  });
});
