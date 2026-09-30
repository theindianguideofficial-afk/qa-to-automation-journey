Feature: Login
  Scenario: Successful login with valid credentials
    Given I am on the login page
    When I log in with username "standard_user" and password "secret_sauce"
    Then I should see the products page
