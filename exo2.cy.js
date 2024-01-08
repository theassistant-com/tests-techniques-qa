/*
DOCUMENTATION
In Cypress, you can get an element using its CSS selector.
Here is a list of common html attributes/tags, and their corresponding CSS selectors:
class ==> .class-name
id ==> #id-name
data-test ==> [data-test="data-test-name"]
href ==> [href="href-name"]
<tag-name></tag-name> ==> tag-name
*/

describe('My First Test', () => {
    it('Clicks on the first element!', () => {
        cy.get('.a-random-class').click()
    })
})

describe('My Second Test', () => {
    it('Clicks on the second element!', () => {
        // Complete the test here by replacing this line
    })
})

describe('My Third Test', () => {
    it('Clicks on the third element!', () => {
        cy.get('[data-test="a-random-test-id"]').click()
    })
})

describe('My Fourth Test', () => {
    it('Clicks on the fourth element!', () => {
        // Complete the test here by replacing this line
    })
})

describe('My Fifth Test', () => {
    it('Clicks on the fifth element!', () => {
        // Complete the test here by replacing this line
    })
})