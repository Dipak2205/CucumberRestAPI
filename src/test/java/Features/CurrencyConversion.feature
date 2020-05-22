Feature: Currency Conversion API Test


Background: Endpoint Configuration 
Given The endpoint is already configured
    
Scenario: Latest Foreign Exchange Rate
When I input a valid date "latest"
Then I should have the status code "200"


Scenario: Specific date Foreign Exchange rates
When I input a valid date "2015-05-13"
Then I should have the status code "200"


Scenario: Specific date Foreign Exchange rates
When I input a invalid date "13-05-2019"
Then I should have the status code "400"


Scenario: Specific date Foreign Exchange rates
When I input a invalid date ""
Then I should have the status code "400"

