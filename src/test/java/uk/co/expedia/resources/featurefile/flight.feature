Feature: Flight Feature and scenario outline for 5 different destinations

  As a user I want to search for flights

  Scenario: User should navigate to the flight page
    Given   I am on Home page
    When    I click on Flights link
    Then    I should be on Flights page

  Scenario Outline: : Verify user is able to search for the destination flights of their choice
    Given   I am on Home page
    When    I click on Flights Tab
    And     I enter origin "<Flying from>"
    And     I enter destination "<Going to>"
    And     I enter departing date "<Departure date>"
    And     I enter returning date "<Returning date>"
    And     I select number of adults travelling
    And     I select number of children travelling and their age
    And     I click on Search button
    Then    I should see "<Results>" for my chosen destination

    Examples:
      | Flying from                                 | Going to                                    | Departure date | Returning date | Results                                |
      | Singapore (SIN-All Airports)                | Delhi (DEL-Indira Gandhi Intl.)             | 09/07/2020     | 18/08/2020     | Select your departure to Delhi         |
      | London (LON-All Airports)                   | San Francisco, CA (SFO-San Francisco Intl.) | 15/01/2021     | 24/02/2021     | Select your departure to San Francisco |
      | San Francisco, CA (SFO-San Francisco Intl.) | New York (NYC-All Airports)                 | 17/08/2020     | 22/09/2020     | Select your departure to New York      |
      | London (LON-All Airports)                   | Dubai (DXB-All Airports)                    | 24/11/2020     | 07/01/2021     | Select your departure to Dubai         |
      | Mumbai (BOM-Chhatrapati Shivaji Intl.)      | Singapore (SIN-All Airports)                | 30/05/2020     | 08/07/2020     | Select your departure to Singapore     |
      | London (LON-All Airports)                   | Cape Town (CPT-Cape Town Intl.)             | 11/01/2021     | 21/02/2021     | Select your departure to Cape Town     |
      | San Francisco, CA (SFO-San Francisco Intl.) | London (LON-All Airports)                   | 19/08/2020     | 26/09/2020     | Select your departure to London        |