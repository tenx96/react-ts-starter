import {expect} from "chai"
describe("Sample Cypress Test" , () => {
    it("Match hello world" , () => {
        cy.visit("/")
        cy.contains("hello world")
    })
})