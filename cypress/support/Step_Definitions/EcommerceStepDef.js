/// <reference types="Cypress"/>

import {Given, When, Then } from "cypress-cucumber-preprocessor/steps"

//npx cypress run --spec cypress\integration\FietureFiles\*.feature --headed

// npx cypress-tags run -e tag="@Test" --headed


// "cypress-cucumber-preprocessor":{
//   "eCommerce":"cypress/integration/examples/BDD/eCommerce/EcommerceStepDef.js"
// }


Given('I open the ecommerce application url', () => {
  cy.visit(Cypress.env('url')+"angularpractice/")

})

  
//When i add item to cart
When('i add item to cart', (dataTable)=>{
    var data= dataTable.raw()

    cy.log('rows : ' + dataTable.rows());
  cy.log('raw : ' + dataTable.raw());
    cy.get('[class="nav-item"]:nth-child(2) > a').click()
    cy.get('[class="nav-item"]:nth-child(2) > a').as('shopLink')
    cy.get('h1.my-4').should('have.text','Shop Name')
    cy.get('h4.card-title >a').each(($el, index, $list) => {
     
          if($el.text().includes(data[index])){
            cy.log($el.text())
            cy.get('div.card-footer').eq(index).click()
          }
      })
})

//Then validate the total price
Then('validate the total price', () =>{

  cy.get('.nav-link.btn.btn-primary').click()

  var sum =0;
  // product price validation
  cy.get('tr td:nth-child(4) strong').each(($el, index, $list) =>{
      const amount = $el.text()
      var res = amount.split(" ")
      res = res[1].trim()
      sum = Number(sum)+Number(res)
      
  }).then(function(){
      cy.log(sum)
  })

  cy.get('h3 strong').then(function(element){
      const amount = element.text()
      var totalAmountText = amount.split(" ")
      var total = totalAmountText[1].trim()
      expect(Number(total)).to.equal(sum)


      // productPage.checkoutButton().click()
  })
})

//And select the country dropdown
Then('select the country dropdown', ()=>{
  cy.get('.btn.btn-success').click()
  cy.get('#country').type('in')
  cy.get('.suggestions ul > li').each(($el, index, $list) =>{
      if($el.text().includes('India')){
          cy.wrap($el).click()
      }
  })
})

//And click on the purchese and verify thankyou message
Then('click on the purchese and verify thankyou message', ()=>{
       cy.get('#checkbox2').check({force:true})
       cy.get('[value="Purchase"]').click()
       cy.get('.alert.alert-success.alert-dismissible').should('contain','Success! Thank you! Your order will be delivered in next few weeks :-).')
       cy.get('.alert.alert-success.alert-dismissible').then(function(successMessage){
           const message = successMessage.text()
           cy.log(message)
           expect(message).to.contains('Success! Thank you! Your order will be delivered in next few weeks :-).')
       })
})