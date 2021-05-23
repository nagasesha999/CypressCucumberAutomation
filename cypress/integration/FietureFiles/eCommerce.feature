Feature: End to end ecommerce application validation 

    Feature Description

    @Test
    Scenario: Ecommerce products delivery
    Given I open the ecommerce application url
    When i add item to cart
    | phones   |
    |iphone X  |
    |Blackberry|
    |Nokia Edge|
    Then validate the total price
    And select the country dropdown
    And click on the purchese and verify thankyou message


     @Test
    Scenario: Ecommerce products delivery
    Given I open the ecommerce application url
    When i add item to cart
    | phones   |
    |iphone X  |
    |Blackberry|
    |Nokia Edge|
    Then validate the total price
    And select the country dropdown
    And click on the purchese and verify thankyou message