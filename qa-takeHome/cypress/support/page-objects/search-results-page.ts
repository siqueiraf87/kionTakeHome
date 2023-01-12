export class SearchResultsPage {

    addOccupants(): void {
        this.getElement_roomPicker().click();
        this.getElement_adultCount().should('have.attr', 'value', '2');
        this.getElement_childrenIncreaseCount().click({force: true});
        this.getElement_childrenCount().should('have.attr', 'value', '1');
        this.getElement_firstChildrenAgeSelector().select(8);
        this.getElement_childrenIncreaseCount().click({force: true});
        this.getElement_childrenCount().should('have.attr', 'value', '2');
        this.getElement_secondChildrenAgeSelector().select(10);
        this.getElement_occupants_applyButton().click();
    }

    private getElement_roomPicker(): Cypress.Chainable {
        return cy.get('[data-stid="open-room-picker"]')
    }

    private getElement_adultCount(): Cypress.Chainable {
        return cy.get('#room-1-0-adults');
    }

    private getElement_childrenCount(): Cypress.Chainable {
        return cy.get('#room-1-0-children');
    }

    private getElement_childrenIncreaseCount(): Cypress.Chainable {
        return cy.get('#room-1-0-children-increase-title');
    }

    private getElement_firstChildrenAgeSelector(): Cypress.Chainable {
        return cy.get('#age-0');
    }

    private getElement_secondChildrenAgeSelector(): Cypress.Chainable {
        return cy.get('#age-1');
    }

    private getElement_occupants_applyButton(): Cypress.Chainable {
        return cy.get('[data-stid="apply-room-picker"]');
    }
}