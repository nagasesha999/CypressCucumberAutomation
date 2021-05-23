class GreenKart{
    vegitableSearchBox(){
       return cy.get('.search-keyword')
    }

    productsList(){
        return cy.get('.products').find('.product')
    }

    clickOnCartBag(){
        return cy.get('.cart-icon > img')
    }

    listOfCartItems(){
        return cy.get('.cart-preview.active li.cart-item')
    }

    proceedToChechOutButton(){
        return cy.get('.cart-preview > .action-block > button')
    }

    placeOrderButton(){
        return cy.contains('Place Order')
    }

    selectDropdownOption(){
        return cy.get('select')
    }

    termsAgreeCheckBox(){
        return cy.get('.chkAgree')
    }

    proceedButton(){
        return cy.contains('Proceed')
    }

    successMessage(){
        return cy.get('div.wrapperTwo')
    }

}
export default GreenKart;