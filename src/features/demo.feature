  
Feature: Test if the url is a certain value
    As a developer
    I want to be able to test if the url is a certain value

   Scenario: The url should not be http://www.google.com/
        Given I open the site "https://www.amazon.com.mx/"
        Then I wait for element visible