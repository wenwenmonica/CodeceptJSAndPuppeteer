Feature: Submit
  In order to submit a form
  As a user
  I need to fill all the required fields of the form

  Scenario: Perform Submit operation
    Given I navigate to the application
    Given I have all the required information
      | Name        | Email              | Date           |
      | Wenwen Yang | wyangyx@gmail.com  | May 26, 2020   |
    And I click Submit button
    Then I will be redirected after successful form submit
