Feature: Services function
  As a user I want to check the services on Harrow website

  Scenario: User should navigate to Services page successfully
    Given  I am on Home page
    When   I click on services button
    Then   I should navigate to Services page successfully

  Scenario: Verify text when user closes Services page
    Given   I am on Home page
    When    I click on services button
    And     I should navigate to Services page successfully
    And     I click on close button
    Then    I should see "SERVICES" text



