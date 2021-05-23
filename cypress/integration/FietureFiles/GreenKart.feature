Feature: Feature name GreenKart

    Feature Description

Scenario: Scenario name greenkart
# Given I open the ecommerce application url
Given I open the geenkart application 'https://rahulshettyacademy.com/seleniumPractise/#/'
When I search vegetables 'ca'
And I verify avilable items
| vegetables |
| Carrot     |
| Capsicum   |
| Cashews    |
And i clicks on bag
Then I verify selected items '3'
When the user able to click proceed to check out
And the user clicks on place order
And the user select 'India' from country dropdown
And proceed to complete your shopping
Then I verify success message 'Thank you'