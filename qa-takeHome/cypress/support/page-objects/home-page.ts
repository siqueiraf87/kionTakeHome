import { find, forEach } from "cypress/types/lodash";
import * as dayjs from "dayjs";

export class homePageObjects {

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

}
