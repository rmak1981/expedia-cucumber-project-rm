$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/uk/co/expedia/resources/featurefile/flight.feature");
formatter.feature({
  "line": 1,
  "name": "Flight Feature",
  "description": "\r\nAs a user I want to search for flights",
  "id": "flight-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 47584598100,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should navigate to the flight page",
  "description": "",
  "id": "flight-feature;user-should-navigate-to-the-flight-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on Flights link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should be on Flights page",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 1268304100,
  "status": "passed"
});
formatter.match({
  "location": "FlightsSteps.iClickOnFlightsLink()"
});
formatter.result({
  "duration": 13955470800,
  "status": "passed"
});
formatter.match({
  "location": "FlightsSteps.iShouldBeOnFlightsPage()"
});
formatter.result({
  "duration": 952554700,
  "status": "passed"
});
formatter.after({
  "duration": 2160297500,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 10,
  "name": ": Verify user is able to search for the destination flights of their choice",
  "description": "",
  "id": "flight-feature;:-verify-user-is-able-to-search-for-the-destination-flights-of-their-choice",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on Flights Tab",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I enter origin \"\u003cFlying from\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter destination \"\u003cGoing to\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter departing date \"\u003cDeparture date\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter returning date \"\u003cReturning date\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I select number of adults travelling",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I select number of children travelling and their age",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click on Search button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I should see \"\u003cResults\u003e\" for my chosen destination",
  "keyword": "Then "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "flight-feature;:-verify-user-is-able-to-search-for-the-destination-flights-of-their-choice;",
  "rows": [
    {
      "cells": [
        "Flying from",
        "Going to",
        "Departure date",
        "Returning date",
        "Results"
      ],
      "line": 22,
      "id": "flight-feature;:-verify-user-is-able-to-search-for-the-destination-flights-of-their-choice;;1"
    },
    {
      "cells": [
        "Dubai (DXB-All Airports)",
        "Delhi (DEL-Indira Gandhi Intl.)",
        "08/07/2020",
        "09/08/2020",
        "Select your departure to Delhi"
      ],
      "line": 23,
      "id": "flight-feature;:-verify-user-is-able-to-search-for-the-destination-flights-of-their-choice;;2"
    },
    {
      "cells": [
        "London (LON-All Airports)",
        "Sydney (SYD-All Airports)",
        "28/11/2020",
        "05/01/2021",
        "Select your departure to Sydney"
      ],
      "line": 24,
      "id": "flight-feature;:-verify-user-is-able-to-search-for-the-destination-flights-of-their-choice;;3"
    },
    {
      "cells": [
        "Mumbai (BOM-Chhatrapati Shivaji Intl.)",
        "Singapore (SIN-All Airports)",
        "27/05/2020",
        "05/06/2020",
        "Select your departure to Singapore"
      ],
      "line": 25,
      "id": "flight-feature;:-verify-user-is-able-to-search-for-the-destination-flights-of-their-choice;;4"
    },
    {
      "cells": [
        "London (LON-All Airports)",
        "Cape Town (CPT-Cape Town Intl.)",
        "15/01/2021",
        "22/02/2021",
        "Select your departure to Cape Town"
      ],
      "line": 26,
      "id": "flight-feature;:-verify-user-is-able-to-search-for-the-destination-flights-of-their-choice;;5"
    },
    {
      "cells": [
        "San Francisco, CA (SFO-San Francisco Intl.)",
        "New York (NYC-All Airports)",
        "15/08/2020",
        "27/09/2020",
        "Select your departure to New York"
      ],
      "line": 27,
      "id": "flight-feature;:-verify-user-is-able-to-search-for-the-destination-flights-of-their-choice;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 22123494900,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": ": Verify user is able to search for the destination flights of their choice",
  "description": "",
  "id": "flight-feature;:-verify-user-is-able-to-search-for-the-destination-flights-of-their-choice;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on Flights Tab",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I enter origin \"Dubai (DXB-All Airports)\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter destination \"Delhi (DEL-Indira Gandhi Intl.)\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter departing date \"08/07/2020\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter returning date \"09/08/2020\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I select number of adults travelling",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I select number of children travelling and their age",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click on Search button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I should see \"Select your departure to Delhi\" for my chosen destination",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 1072800,
  "status": "passed"
});
formatter.match({
  "location": "FlightsSteps.iClickOnFlightsTab()"
});
formatter.result({
  "duration": 966491800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dubai (DXB-All Airports)",
      "offset": 16
    }
  ],
  "location": "FlightsSteps.iEnterOrigin(String)"
});
formatter.result({
  "duration": 1916307400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Delhi (DEL-Indira Gandhi Intl.)",
      "offset": 21
    }
  ],
  "location": "FlightsSteps.iEnterDestination(String)"
});
formatter.result({
  "duration": 1321871400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "08/07/2020",
      "offset": 24
    }
  ],
  "location": "FlightsSteps.iEnterDepartingDate(String)"
});
formatter.result({
  "duration": 984655500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "09/08/2020",
      "offset": 24
    }
  ],
  "location": "FlightsSteps.iEnterReturningDate(String)"
});
formatter.result({
  "duration": 532650600,
  "status": "passed"
});
formatter.match({
  "location": "FlightsSteps.iSelectNumberOfAdultsTravelling()"
});
formatter.result({
  "duration": 758736400,
  "status": "passed"
});
formatter.match({
  "location": "FlightsSteps.iSelectNumberOfChildrenTravellingAndTheirAge()"
});
formatter.result({
  "duration": 512483900,
  "status": "passed"
});
formatter.match({
  "location": "FlightsSteps.iClickOnSearchButton()"
});
formatter.result({
  "duration": 19121865900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Select your departure to Delhi",
      "offset": 14
    }
  ],
  "location": "FlightsSteps.iShouldSeeForMyChosenDestination(String)"
});
formatter.result({
  "duration": 479401300,
  "status": "passed"
});
formatter.after({
  "duration": 1586744000,
  "status": "passed"
});
formatter.before({
  "duration": 21159674600,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": ": Verify user is able to search for the destination flights of their choice",
  "description": "",
  "id": "flight-feature;:-verify-user-is-able-to-search-for-the-destination-flights-of-their-choice;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on Flights Tab",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I enter origin \"London (LON-All Airports)\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter destination \"Sydney (SYD-All Airports)\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter departing date \"28/11/2020\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter returning date \"05/01/2021\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I select number of adults travelling",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I select number of children travelling and their age",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click on Search button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I should see \"Select your departure to Sydney\" for my chosen destination",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 500400,
  "status": "passed"
});
formatter.match({
  "location": "FlightsSteps.iClickOnFlightsTab()"
});
formatter.result({
  "duration": 1268691900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "London (LON-All Airports)",
      "offset": 16
    }
  ],
  "location": "FlightsSteps.iEnterOrigin(String)"
});
formatter.result({
  "duration": 1895596300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sydney (SYD-All Airports)",
      "offset": 21
    }
  ],
  "location": "FlightsSteps.iEnterDestination(String)"
});
formatter.result({
  "duration": 1146482600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "28/11/2020",
      "offset": 24
    }
  ],
  "location": "FlightsSteps.iEnterDepartingDate(String)"
});
formatter.result({
  "duration": 556655800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "05/01/2021",
      "offset": 24
    }
  ],
  "location": "FlightsSteps.iEnterReturningDate(String)"
});
formatter.result({
  "duration": 678718000,
  "status": "passed"
});
formatter.match({
  "location": "FlightsSteps.iSelectNumberOfAdultsTravelling()"
});
formatter.result({
  "duration": 517607500,
  "status": "passed"
});
formatter.match({
  "location": "FlightsSteps.iSelectNumberOfChildrenTravellingAndTheirAge()"
});
formatter.result({
  "duration": 461182800,
  "status": "passed"
});
formatter.match({
  "location": "FlightsSteps.iClickOnSearchButton()"
});
formatter.result({
  "duration": 13703107000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Select your departure to Sydney",
      "offset": 14
    }
  ],
  "location": "FlightsSteps.iShouldSeeForMyChosenDestination(String)"
});
formatter.result({
  "duration": 2642393500,
  "status": "passed"
});
formatter.after({
  "duration": 1974586400,
  "status": "passed"
});
formatter.before({
  "duration": 19288293800,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": ": Verify user is able to search for the destination flights of their choice",
  "description": "",
  "id": "flight-feature;:-verify-user-is-able-to-search-for-the-destination-flights-of-their-choice;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on Flights Tab",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I enter origin \"Mumbai (BOM-Chhatrapati Shivaji Intl.)\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter destination \"Singapore (SIN-All Airports)\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter departing date \"27/05/2020\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter returning date \"05/06/2020\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I select number of adults travelling",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I select number of children travelling and their age",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click on Search button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I should see \"Select your departure to Singapore\" for my chosen destination",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 351800,
  "status": "passed"
});
formatter.match({
  "location": "FlightsSteps.iClickOnFlightsTab()"
});
formatter.result({
  "duration": 1170524700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mumbai (BOM-Chhatrapati Shivaji Intl.)",
      "offset": 16
    }
  ],
  "location": "FlightsSteps.iEnterOrigin(String)"
});
formatter.result({
  "duration": 2070862700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Singapore (SIN-All Airports)",
      "offset": 21
    }
  ],
  "location": "FlightsSteps.iEnterDestination(String)"
});
formatter.result({
  "duration": 1373281600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "27/05/2020",
      "offset": 24
    }
  ],
  "location": "FlightsSteps.iEnterDepartingDate(String)"
});
formatter.result({
  "duration": 593690000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "05/06/2020",
      "offset": 24
    }
  ],
  "location": "FlightsSteps.iEnterReturningDate(String)"
});
formatter.result({
  "duration": 555725000,
  "status": "passed"
});
formatter.match({
  "location": "FlightsSteps.iSelectNumberOfAdultsTravelling()"
});
formatter.result({
  "duration": 627990700,
  "status": "passed"
});
formatter.match({
  "location": "FlightsSteps.iSelectNumberOfChildrenTravellingAndTheirAge()"
});
formatter.result({
  "duration": 504512700,
  "status": "passed"
});
formatter.match({
  "location": "FlightsSteps.iClickOnSearchButton()"
});
formatter.result({
  "duration": 20005970300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Select your departure to Singapore",
      "offset": 14
    }
  ],
  "location": "FlightsSteps.iShouldSeeForMyChosenDestination(String)"
});
formatter.result({
  "duration": 1818668100,
  "status": "passed"
});
formatter.after({
  "duration": 1842895300,
  "status": "passed"
});
formatter.before({
  "duration": 18471383600,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": ": Verify user is able to search for the destination flights of their choice",
  "description": "",
  "id": "flight-feature;:-verify-user-is-able-to-search-for-the-destination-flights-of-their-choice;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on Flights Tab",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I enter origin \"London (LON-All Airports)\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter destination \"Cape Town (CPT-Cape Town Intl.)\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter departing date \"15/01/2021\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter returning date \"22/02/2021\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I select number of adults travelling",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I select number of children travelling and their age",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click on Search button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I should see \"Select your departure to Cape Town\" for my chosen destination",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 385700,
  "status": "passed"
});
formatter.match({
  "location": "FlightsSteps.iClickOnFlightsTab()"
});
formatter.result({
  "duration": 757605300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "London (LON-All Airports)",
      "offset": 16
    }
  ],
  "location": "FlightsSteps.iEnterOrigin(String)"
});
formatter.result({
  "duration": 1699906900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cape Town (CPT-Cape Town Intl.)",
      "offset": 21
    }
  ],
  "location": "FlightsSteps.iEnterDestination(String)"
});
formatter.result({
  "duration": 1407007100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15/01/2021",
      "offset": 24
    }
  ],
  "location": "FlightsSteps.iEnterDepartingDate(String)"
});
formatter.result({
  "duration": 605120900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "22/02/2021",
      "offset": 24
    }
  ],
  "location": "FlightsSteps.iEnterReturningDate(String)"
});
formatter.result({
  "duration": 589453900,
  "status": "passed"
});
formatter.match({
  "location": "FlightsSteps.iSelectNumberOfAdultsTravelling()"
});
formatter.result({
  "duration": 550784800,
  "status": "passed"
});
formatter.match({
  "location": "FlightsSteps.iSelectNumberOfChildrenTravellingAndTheirAge()"
});
formatter.result({
  "duration": 469246900,
  "status": "passed"
});
formatter.match({
  "location": "FlightsSteps.iClickOnSearchButton()"
});
formatter.result({
  "duration": 19141210300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Select your departure to Cape Town",
      "offset": 14
    }
  ],
  "location": "FlightsSteps.iShouldSeeForMyChosenDestination(String)"
});
formatter.result({
  "duration": 143303400,
  "status": "passed"
});
formatter.after({
  "duration": 1947352700,
  "status": "passed"
});
formatter.before({
  "duration": 19302966900,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": ": Verify user is able to search for the destination flights of their choice",
  "description": "",
  "id": "flight-feature;:-verify-user-is-able-to-search-for-the-destination-flights-of-their-choice;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on Flights Tab",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I enter origin \"San Francisco, CA (SFO-San Francisco Intl.)\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter destination \"New York (NYC-All Airports)\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter departing date \"15/08/2020\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter returning date \"27/09/2020\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I select number of adults travelling",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I select number of children travelling and their age",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click on Search button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I should see \"Select your departure to New York\" for my chosen destination",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 280300,
  "status": "passed"
});
formatter.match({
  "location": "FlightsSteps.iClickOnFlightsTab()"
});
formatter.result({
  "duration": 1154184000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "San Francisco, CA (SFO-San Francisco Intl.)",
      "offset": 16
    }
  ],
  "location": "FlightsSteps.iEnterOrigin(String)"
});
formatter.result({
  "duration": 2236686400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New York (NYC-All Airports)",
      "offset": 21
    }
  ],
  "location": "FlightsSteps.iEnterDestination(String)"
});
formatter.result({
  "duration": 1373554300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15/08/2020",
      "offset": 24
    }
  ],
  "location": "FlightsSteps.iEnterDepartingDate(String)"
});
formatter.result({
  "duration": 646155700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "27/09/2020",
      "offset": 24
    }
  ],
  "location": "FlightsSteps.iEnterReturningDate(String)"
});
formatter.result({
  "duration": 674652200,
  "status": "passed"
});
formatter.match({
  "location": "FlightsSteps.iSelectNumberOfAdultsTravelling()"
});
formatter.result({
  "duration": 696019200,
  "status": "passed"
});
formatter.match({
  "location": "FlightsSteps.iSelectNumberOfChildrenTravellingAndTheirAge()"
});
formatter.result({
  "duration": 445830400,
  "status": "passed"
});
formatter.match({
  "location": "FlightsSteps.iClickOnSearchButton()"
});
formatter.result({
  "duration": 18245183700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Select your departure to New York",
      "offset": 14
    }
  ],
  "location": "FlightsSteps.iShouldSeeForMyChosenDestination(String)"
});
formatter.result({
  "duration": 81929600,
  "status": "passed"
});
formatter.after({
  "duration": 1576644000,
  "status": "passed"
});
});