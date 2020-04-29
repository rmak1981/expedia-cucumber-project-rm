Feature: Login & Logout feature

  As a user I want to login & logout on orangehrmlive website

  Scenario: User should login successfully with valid credentials
    Given   I am on Home page
    When    I enter username "Admin"
    And     I enter password "admin123"
    And     I click on login button
    Then    I should login successfully

  Scenario: verify text on the home page when user logs out successfully
    Given   I am on Home page
    When    I enter username "Admin"
    And     I enter password "admin123"
    And     I click on login button
    And     I click on welcome admin link and logout link
    Then    I should see the text "LOGIN Panel"