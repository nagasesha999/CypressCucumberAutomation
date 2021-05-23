/// <reference types="Cypress"/>
import GreenKart from '../PageObjects/GreenKartPage'
import {Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
const greenKart = new GreenKart()
Given(/I open the geenkart application '(.+)'/,(StringUrl)=>{
    cy.visit(StringUrl)
})

When(/I search vegetables '(.+)'/,(veg) =>{
    greenKart.vegitableSearchBox().type('ca')
    // cy.get('.search-keyword').type(veg)
    // cy.log(veg)
})

Then("I verify avilable items", (dataTable) =>{
    dataTable.hashes().forEach(element => {
        // cy.get('.products').find('.product').each(($el, index, $list) => {
        greenKart.productsList().each(($el, index, $list) => {
            const veg = $el.find('h4[class="product-name"]').text()
            if(veg.includes(element.vegetables)){
               cy.wrap($el).find('button').click()
            }
        })
        cy.log(element.vegetables)
    });
})

And(/i clicks on bag/, () =>{
    // cy.get('.cart-icon > img').click()
    greenKart.clickOnCartBag().click()
})

Then(/I verify selected items '(.+)'/,(count)=>{
    cy.get('.cart-preview.active li.cart-item').should('have.length',count)
    greenKart.listOfCartItems().should('have.length', count)
})

When(/the user able to click proceed to check out/, ()=>{
    greenKart.proceedToChechOutButton().should('be.enabled')
    greenKart.proceedToChechOutButton().click()
})

And(/the user clicks on place order/, ()=>{
    greenKart.placeOrderButton().click()
})

And(/the user select '(.+)' from country dropdown/,(country)=>{
    greenKart.selectDropdownOption().select(country);
})

And(/proceed to complete your shopping/,()=>{
    greenKart.termsAgreeCheckBox().check({force:true})
    greenKart.proceedButton().click()
})

Then(/I verify success message '(.+)'/,(ExpMessage)=>{
    greenKart.successMessage().then(function(message){
        const vMessage = message.text()
        expect(vMessage.includes(ExpMessage)).to.be.true
    })
})