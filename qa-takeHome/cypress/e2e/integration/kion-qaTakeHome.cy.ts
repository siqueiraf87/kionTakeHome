/// <reference types="cypress" />
import 'cypress-wait-until';
import {homePageObjects} from '../../support/page-objects/home-page-objects'

describe('Kion QA Take Home Navigating Expedia', () => {
    let homepage = new homePageObjects();

    before(() => {
        cy.visit('https://www.expedia.com/');
    });

    it('Test Case 1: Check-in for a week Universal Orlando Resort', () => {
        cy.get('.uitk-tabs-container').contains('Stays').click();
        homepage.destinationSelector('Universal Orlando Resort');
        homepage.checkInOutDate();
    })
})