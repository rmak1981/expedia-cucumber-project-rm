Feature: Login Feature

  As a user I want to login to my nop commerce account

  Scenario: User should navigate to Login page successfully
    Given   I am on Home page
    When    I click on Login Link
    Then    I should navigate to Login page successfully

  Scenario: User should Login successfully with valid credentials
    Given   I am on Home page
    When    I click on Login Link
    And     I enter email "xyz13@gmail.com"
    And     I enter password "abc123"
    And     I click on Login button
    Then    I should Login successfully

  Scenario Outline: User should Login successfully with valid credentials
    Given   I am on Home page
    When    I click on Login Link
    And     I enter email "<email>"
    And     I enter password "<password>"
    And     I click on Login button
    Then    I should Login successfully
    Examples:
      | email            | password |
      | xyz13@gmail.com  | abc123   |
      | xyz1@gmail.com   | abc1234  |
      | ram111@yahoo.com | london3  |
      | ram222@yahoo.com | london1  |
      | ram333@yahoo.com | london2  |
      | ram444@yahoo.com | london4  |
      | ram555@yahoo.com | london5  |
