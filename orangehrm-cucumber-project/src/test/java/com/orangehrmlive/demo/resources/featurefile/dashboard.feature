Feature: Dashboard feature

  As a user I want to use PIM functionality on account page

  Scenario: User should navigate to add employee page
    Given   I am on Home page
    When    I enter username "Admin"
    And     I enter password "admin123"
    And     I click on login button
    And     I click on pim button
    And     I click on add employee button
    Then    I am on add employee page

    Scenario: User should search an employee by their name successfully
      Given   I am on Home page
      When    I enter username "Admin"
      And     I enter password "admin123"
      And     I click on login button
      And     I click on pim button
      And     I click on employee list button
      And     I enter employee name in the employee name search field
      And     I click on search button
      Then    I should see the searched employee name in the result table below



