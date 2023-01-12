/// <reference types="cypress" />
import 'cypress-wait-until';
import { SearchResultsPage } from 'cypress/support/page-objects/search-results-page';
import { homePageObjects } from 'cypress/support/page-objects/home-page'

describe('Kion QA Take Home Navigating Expedia', () => {
    let homepage = new homePageObjects();
    let searchResults = new SearchResultsPage();

    beforeEach(() => {
        cy.visit('https://www.expedia.com/');
    });

    it('Test Case 1: Check-in for a week Universal Orlando Resort', () => {
        homepage.navigateToStays();
        homepage.destinationSelector('Universal Orlando Resort');
        homepage.checkInOutDate();
    });

    it('Test Case 2: On SERP Travelers Dropdown, select two adults and two children, and then set the children’s ages to 8 and 10', () => {
        homepage.navigateToStays();
        homepage.destinationSelector('Universal Orlando Resort');
        homepage.checkInOutDate();
        searchResults.addOccupants();
    });

    it('Test Case 3: From Homepage verify defaults are selected on flights tab page load', () => {
        homepage.navigateToFlights();
        homepage.flightsTabDefaults();
        homepage.preferredClassSelection();
    });
})