import { find, forEach } from "cypress/types/lodash";
import * as dayjs from "dayjs";

export class homePageObjects {

    navigateToStays(): void {
        this.getElement_Stays().click();
    }
    navigateToFlights(): void {
        this.getElement_Flights().click();
    }

    destinationSelector(destination: string): void {
        this.getElement_goingToDestination()
            .should('be.visible')
            .click()
            .type(destination, {delay: 20});
        cy.wait(200);
        this.getElement_destinationSelection().contains(destination).click();
        this.getElement_goingToDestination().should('contain.text', destination);
    }

    checkInOutDate(): void {
        const date = dayjs();
        const checkinday = Number(date.add(6, 'day')
            .format('D'));

        const checkoutday = Number(date.add(13, 'day')
            .format('D'));

        this.getElement_checkInDate().click();
        this.getElement_checkInDate_weeks().find('button').eq(checkinday).click();
        this.getElement_checkInDate_weeks().find('button').eq(checkoutday).click();
        this.getElement_datePicker_applyButton().click({force: true}).type('{esc}');
        this.getElement_searchButton().click();
    }

    flightsTabDefaults(): void {
        this.getElement_flights_headerTabs_roundTrip().parent().parent().should('have.class', 'active');
        this.getElement_flights_roundTrip_leavingFrom().should('be.visible');
        this.getElement_flights_roundTrip_goingTo().should('be.visible');
        this.getElement_flights_roundTrip_departingDate().should('be.visible');
        this.getElement_flights_roundTrip_returningDate().should('be.visible');
    }

    validateFlightsOneWayReturnNotVisible(): void {
        this.getElement_flights_headerTabs_oneWay().click();
        this.getElement_flights_roundTrip_returningDate().should('not.exist');
    }

    preferredClassSelection(): void {
        this.getElement_flights_preferredClass().click();
        this.getElement_flights_preferredClass_firstClass().click({force:true});
        this.getElement_flights_preferredClass().should('have.text', 'First class');
    }

    homepageHeaderTabsValidation(): void {
        const numberOfTabs = 6;

        for (let i = 1; i <= numberOfTabs; i+=1) {
            cy.get(`.uitk-card > .uitk-tabs-container > .uitk-tabs > :nth-child(${i}) > .uitk-tab-anchor > .uitk-tab-text`).click().then(() => {
                this.getElement_searchButton().should('be.visible');
            });
        }
    }

    private getElement_Stays(): Cypress.Chainable   {
        return cy.get('.uitk-tabs-container').contains('Stays');
    }

    private getElement_Flights(): Cypress.Chainable {
        return cy.get('.uitk-tabs-container').contains('Flights');
    }

    private getElement_goingToDestination(): Cypress.Chainable {
        return cy.get('#location-field-destination-menu');
    }

    private getElement_destinationSelection(): Cypress.Chainable {
        return cy.get('.uitk-typeahead-result-item');
    }

    private getElement_checkInDate_weeks(): Cypress.Chainable {
        return cy.get('.uitk-date-picker-weeks');
    }

    private getElement_checkInDate(): Cypress.Chainable {
        return cy.get('#d1-btn');
    }

    private getElement_datePicker_applyButton(): Cypress.Chainable {
        return cy.get('.uitk-button').contains('Done')
    }

    private getElement_searchButton(): Cypress.Chainable {
        return cy.get('[data-testid="submit-button"]');
    }

    private getElement_flights_headerTabs_roundTrip(): Cypress.Chainable {
        return cy.get('.uitk-tab-text').contains('Roundtrip');
    }

    private getElement_flights_headerTabs_oneWay(): Cypress.Chainable {
        return cy.get('.uitk-tab-text').contains('One-way');
    }

    private getElement_flights_roundTrip_leavingFrom(): Cypress.Chainable {
        return cy.get('[data-stid="location-field-leg1-origin-menu-trigger"]');
    }

    private getElement_flights_roundTrip_goingTo(): Cypress.Chainable {
        return cy.get('[data-stid="location-field-leg1-destination-menu-trigger"]');
    }

    private getElement_flights_roundTrip_departingDate(): Cypress.Chainable {
        return cy.get('.uitk-field-label').contains('Departing');
    }

    private getElement_flights_roundTrip_returningDate(): Cypress.Chainable {
        return cy.get('.uitk-field-label').contains('Returning');
    }

    private getElement_flights_preferredClass(): Cypress.Chainable {
        return cy.get('[data-testid="preferred-class-input-trigger"]')
    }

    private getElement_flights_preferredClass_firstClass(): Cypress.Chainable {
        return cy.get('.uitk-menu-list-item-label').contains('First class');
    }

}