Feature: This feature is to validate the sign in 
I navigate to 'amazon.com.mx'
I select the option 'Login'
I enter my credentials

  Scenario: The user is able to sign in to the amazon
    Given I open a site "http://testapp.galenframework.com/"
    When I go to sign-in page
    And I enter the credentials to sign-in