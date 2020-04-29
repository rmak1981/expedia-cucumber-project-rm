Feature: Harrow Login Test
  As a user I want to navigate to login page

  Scenario: User should navigate to Login page successfully
    Given   I am on Home page
    When    I click on Login Link
    Then    I should navigate to Login page successfully

  Scenario: Verify the error message when user login with invalid credentials
    Given  I am on Home page
    When   I click on Login Link
    And    I enter email "xyz@gmail.com"
    And    I enter password "abc123"
    And    I click on Login button
    Then   I should see the error message "Invalid Username/Password supplied"
