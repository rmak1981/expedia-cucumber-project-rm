$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/uk/co/expedia/resources/featurefile/flight.feature");
formatter.feature({
  "line": 1,
  "name": "Flight Feature and scenario outline for 5 different destinations",
  "description": "\r\nAs a user I want to search for flights",
  "id": "flight-feature-and-scenario-outline-for-5-different-destinations",
  "keyword": "Feature"
});
formatter.before({
  "duration": 30370170000,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should navigate to the flight page",
  "description": "",
  "id": "flight-feature-and-scenario-outline-for-5-different-destinations;user-should-navigate-to-the-flight-page",
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
  "duration": 320809400,
  "status": "passed"
});
formatter.match({
  "location": "FlightsSteps.iClickOnFlightsLink()"
});
formatter.result({
  "duration": 10636979700,
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d81.0.4044.122)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LENSESUK\u0027, ip: \u0027192.168.0.15\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 81.0.4044.122, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\LENSES~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:59034}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 1430de107e5d434b0305545b2c251c19\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy19.click(Unknown Source)\r\n\tat uk.co.expedia.utility.Utility.clickOnElement(Utility.java:131)\r\n\tat uk.co.expedia.pages.HomePage.clickOnFlightLink(HomePage.java:38)\r\n\tat uk.co.expedia.cucumber.stepdefs.FlightsSteps.iClickOnFlightsLink(FlightsSteps.java:14)\r\n\tat ✽.When I click on Flights link(src/test/java/uk/co/expedia/resources/featurefile/flight.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "FlightsSteps.iShouldBeOnFlightsPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1425000800,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 10,
  "name": ": Verify user is able to search for the destination flights of their choice",
  "description": "",
  "id": "flight-feature-and-scenario-outline-for-5-different-destinations;:-verify-user-is-able-to-search-for-the-destination-flights-of-their-choice",
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
  "line": 22,
  "name": "",
  "description": "",
  "id": "flight-feature-and-scenario-outline-for-5-different-destinations;:-verify-user-is-able-to-search-for-the-destination-flights-of-their-choice;",
  "rows": [
    {
      "cells": [
        "Flying from",
        "Going to",
        "Departure date",
        "Returning date",
        "Results"
      ],
      "line": 23,
      "id": "flight-feature-and-scenario-outline-for-5-different-destinations;:-verify-user-is-able-to-search-for-the-destination-flights-of-their-choice;;1"
    },
    {
      "cells": [
        "Singapore (SIN-All Airports)",
        "Delhi (DEL-Indira Gandhi Intl.)",
        "09/07/2020",
        "18/08/2020",
        "Select your departure to Singapore"
      ],
      "line": 24,
      "id": "flight-feature-and-scenario-outline-for-5-different-destinations;:-verify-user-is-able-to-search-for-the-destination-flights-of-their-choice;;2"
    },
    {
      "cells": [
        "London (LON-All Airports)",
        "San Francisco, CA (SFO-San Francisco Intl.)",
        "15/01/2021",
        "24/02/2021",
        "Select your departure to London"
      ],
      "line": 25,
      "id": "flight-feature-and-scenario-outline-for-5-different-destinations;:-verify-user-is-able-to-search-for-the-destination-flights-of-their-choice;;3"
    },
    {
      "cells": [
        "San Francisco, CA (SFO-San Francisco Intl.)",
        "New York (NYC-All Airports)",
        "17/08/2020",
        "22/09/2020",
        "Select your departure to Cape Town"
      ],
      "line": 26,
      "id": "flight-feature-and-scenario-outline-for-5-different-destinations;:-verify-user-is-able-to-search-for-the-destination-flights-of-their-choice;;4"
    },
    {
      "cells": [
        "London (LON-All Airports)",
        "Dubai (DXB-All Airports)",
        "24/11/2020",
        "07/01/2021",
        "Select your departure to London"
      ],
      "line": 27,
      "id": "flight-feature-and-scenario-outline-for-5-different-destinations;:-verify-user-is-able-to-search-for-the-destination-flights-of-their-choice;;5"
    },
    {
      "cells": [
        "Mumbai (BOM-Chhatrapati Shivaji Intl.)",
        "Singapore (SIN-All Airports)",
        "30/05/2020",
        "08/07/2020",
        "Select your departure to Mumbai"
      ],
      "line": 28,
      "id": "flight-feature-and-scenario-outline-for-5-different-destinations;:-verify-user-is-able-to-search-for-the-destination-flights-of-their-choice;;6"
    },
    {
      "cells": [
        "London (LON-All Airports)",
        "Cape Town (CPT-Cape Town Intl.)",
        "11/01/2021",
        "21/02/2021",
        "Select your departure to London"
      ],
      "line": 29,
      "id": "flight-feature-and-scenario-outline-for-5-different-destinations;:-verify-user-is-able-to-search-for-the-destination-flights-of-their-choice;;7"
    },
    {
      "cells": [
        "San Francisco, CA (SFO-San Francisco Intl.)",
        "London (LON-All Airports)",
        "19/08/2020",
        "26/09/2020",
        "Select your departure to Cape Town"
      ],
      "line": 30,
      "id": "flight-feature-and-scenario-outline-for-5-different-destinations;:-verify-user-is-able-to-search-for-the-destination-flights-of-their-choice;;8"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 16755333500,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": ": Verify user is able to search for the destination flights of their choice",
  "description": "",
  "id": "flight-feature-and-scenario-outline-for-5-different-destinations;:-verify-user-is-able-to-search-for-the-destination-flights-of-their-choice;;2",
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
  "name": "I enter origin \"Singapore (SIN-All Airports)\"",
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
  "name": "I enter departing date \"09/07/2020\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter returning date \"18/08/2020\"",
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
  "duration": 1749300,
  "status": "passed"
});
formatter.match({
  "location": "FlightsSteps.iClickOnFlightsTab()"
});
formatter.result({
  "duration": 1231455700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Singapore (SIN-All Airports)",
      "offset": 16
    }
  ],
  "location": "FlightsSteps.iEnterOrigin(String)"
});
formatter.result({
  "duration": 1742744800,
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
  "duration": 1680592100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "09/07/2020",
      "offset": 24
    }
  ],
  "location": "FlightsSteps.iEnterDepartingDate(String)"
});
formatter.result({
  "duration": 773655000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "18/08/2020",
      "offset": 24
    }
  ],
  "location": "FlightsSteps.iEnterReturningDate(String)"
});
formatter.result({
  "duration": 941260400,
  "status": "passed"
});
formatter.match({
  "location": "FlightsSteps.iSelectNumberOfAdultsTravelling()"
});
formatter.result({
  "duration": 523066200,
  "status": "passed"
});
formatter.match({
  "location": "FlightsSteps.iSelectNumberOfChildrenTravellingAndTheirAge()"
});
formatter.result({
  "duration": 609863700,
  "status": "passed"
});
formatter.match({
  "location": "FlightsSteps.iClickOnSearchButton()"
});
formatter.result({
  "duration": 12934478900,
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
  "duration": 125106600,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c...t your departure to [Delhi]\u003e but was:\u003c...t your departure to [Singapore]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat uk.co.expedia.utility.Utility.verifyTextAssertMethod(Utility.java:538)\r\n\tat uk.co.expedia.pages.SearchResultPage.verifyDestinationText(SearchResultPage.java:19)\r\n\tat uk.co.expedia.cucumber.stepdefs.FlightsSteps.iShouldSeeForMyChosenDestination(FlightsSteps.java:66)\r\n\tat ✽.Then I should see \"Select your departure to Singapore\" for my chosen destination(src/test/java/uk/co/expedia/resources/featurefile/flight.feature:20)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1440816700,
  "status": "passed"
});
formatter.before({
  "duration": 15890761500,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": ": Verify user is able to search for the destination flights of their choice",
  "description": "",
  "id": "flight-feature-and-scenario-outline-for-5-different-destinations;:-verify-user-is-able-to-search-for-the-destination-flights-of-their-choice;;3",
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
  "name": "I enter destination \"San Francisco, CA (SFO-San Francisco Intl.)\"",
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
  "name": "I enter returning date \"24/02/2021\"",
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
  "name": "I should see \"Select your departure to London\" for my chosen destination",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 638400,
  "status": "passed"
});
formatter.match({
  "location": "FlightsSteps.iClickOnFlightsTab()"
});
formatter.result({
  "duration": 894243600,
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
  "duration": 2064099800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "San Francisco, CA (SFO-San Francisco Intl.)",
      "offset": 21
    }
  ],
  "location": "FlightsSteps.iEnterDestination(String)"
});
formatter.result({
  "duration": 2304822000,
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
  "duration": 849796400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "24/02/2021",
      "offset": 24
    }
  ],
  "location": "FlightsSteps.iEnterReturningDate(String)"
});
formatter.result({
  "duration": 724707700,
  "status": "passed"
});
formatter.match({
  "location": "FlightsSteps.iSelectNumberOfAdultsTravelling()"
});
formatter.result({
  "duration": 647727000,
  "status": "passed"
});
formatter.match({
  "location": "FlightsSteps.iSelectNumberOfChildrenTravellingAndTheirAge()"
});
formatter.result({
  "duration": 510440200,
  "status": "passed"
});
formatter.match({
  "location": "FlightsSteps.iClickOnSearchButton()"
});
formatter.result({
  "duration": 14336546200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Select your departure to London",
      "offset": 14
    }
  ],
  "location": "FlightsSteps.iShouldSeeForMyChosenDestination(String)"
});
formatter.result({
  "duration": 182394800,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c...t your departure to [San Francisco]\u003e but was:\u003c...t your departure to [London]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat uk.co.expedia.utility.Utility.verifyTextAssertMethod(Utility.java:538)\r\n\tat uk.co.expedia.pages.SearchResultPage.verifyDestinationText(SearchResultPage.java:19)\r\n\tat uk.co.expedia.cucumber.stepdefs.FlightsSteps.iShouldSeeForMyChosenDestination(FlightsSteps.java:66)\r\n\tat ✽.Then I should see \"Select your departure to London\" for my chosen destination(src/test/java/uk/co/expedia/resources/featurefile/flight.feature:20)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1817652900,
  "status": "passed"
});
formatter.before({
  "duration": 17018807700,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": ": Verify user is able to search for the destination flights of their choice",
  "description": "",
  "id": "flight-feature-and-scenario-outline-for-5-different-destinations;:-verify-user-is-able-to-search-for-the-destination-flights-of-their-choice;;4",
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
  "name": "I enter departing date \"17/08/2020\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter returning date \"22/09/2020\"",
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
  "duration": 579400,
  "status": "passed"
});
formatter.match({
  "location": "FlightsSteps.iClickOnFlightsTab()"
});
formatter.result({
  "duration": 709721500,
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
  "duration": 2332525900,
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
  "duration": 1837232500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "17/08/2020",
      "offset": 24
    }
  ],
  "location": "FlightsSteps.iEnterDepartingDate(String)"
});
formatter.result({
  "duration": 1146955300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "22/09/2020",
      "offset": 24
    }
  ],
  "location": "FlightsSteps.iEnterReturningDate(String)"
});
formatter.result({
  "duration": 804977300,
  "status": "passed"
});
formatter.match({
  "location": "FlightsSteps.iSelectNumberOfAdultsTravelling()"
});
formatter.result({
  "duration": 703612900,
  "status": "passed"
});
formatter.match({
  "location": "FlightsSteps.iSelectNumberOfChildrenTravellingAndTheirAge()"
});
formatter.result({
  "duration": 573910300,
  "status": "passed"
});
formatter.match({
  "location": "FlightsSteps.iClickOnSearchButton()"
});
formatter.result({
  "duration": 18016301300,
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
  "duration": 68091400,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c...t your departure to [New York]\u003e but was:\u003c...t your departure to [Cape Town]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat uk.co.expedia.utility.Utility.verifyTextAssertMethod(Utility.java:538)\r\n\tat uk.co.expedia.pages.SearchResultPage.verifyDestinationText(SearchResultPage.java:19)\r\n\tat uk.co.expedia.cucumber.stepdefs.FlightsSteps.iShouldSeeForMyChosenDestination(FlightsSteps.java:66)\r\n\tat ✽.Then I should see \"Select your departure to Cape Town\" for my chosen destination(src/test/java/uk/co/expedia/resources/featurefile/flight.feature:20)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1687250700,
  "status": "passed"
});
formatter.before({
  "duration": 17455517900,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": ": Verify user is able to search for the destination flights of their choice",
  "description": "",
  "id": "flight-feature-and-scenario-outline-for-5-different-destinations;:-verify-user-is-able-to-search-for-the-destination-flights-of-their-choice;;5",
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
  "name": "I enter destination \"Dubai (DXB-All Airports)\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter departing date \"24/11/2020\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter returning date \"07/01/2021\"",
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
  "name": "I should see \"Select your departure to London\" for my chosen destination",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 496200,
  "status": "passed"
});
formatter.match({
  "location": "FlightsSteps.iClickOnFlightsTab()"
});
formatter.result({
  "duration": 1461612700,
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
  "duration": 1714735600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dubai (DXB-All Airports)",
      "offset": 21
    }
  ],
  "location": "FlightsSteps.iEnterDestination(String)"
});
formatter.result({
  "duration": 1500799100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "24/11/2020",
      "offset": 24
    }
  ],
  "location": "FlightsSteps.iEnterDepartingDate(String)"
});
formatter.result({
  "duration": 837471600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "07/01/2021",
      "offset": 24
    }
  ],
  "location": "FlightsSteps.iEnterReturningDate(String)"
});
formatter.result({
  "duration": 830209100,
  "status": "passed"
});
formatter.match({
  "location": "FlightsSteps.iSelectNumberOfAdultsTravelling()"
});
formatter.result({
  "duration": 507532500,
  "status": "passed"
});
formatter.match({
  "location": "FlightsSteps.iSelectNumberOfChildrenTravellingAndTheirAge()"
});
formatter.result({
  "duration": 653864900,
  "status": "passed"
});
formatter.match({
  "location": "FlightsSteps.iClickOnSearchButton()"
});
formatter.result({
  "duration": 13689423500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Select your departure to London",
      "offset": 14
    }
  ],
  "location": "FlightsSteps.iShouldSeeForMyChosenDestination(String)"
});
formatter.result({
  "duration": 605472400,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c...t your departure to [Dubai]\u003e but was:\u003c...t your departure to [London]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat uk.co.expedia.utility.Utility.verifyTextAssertMethod(Utility.java:538)\r\n\tat uk.co.expedia.pages.SearchResultPage.verifyDestinationText(SearchResultPage.java:19)\r\n\tat uk.co.expedia.cucumber.stepdefs.FlightsSteps.iShouldSeeForMyChosenDestination(FlightsSteps.java:66)\r\n\tat ✽.Then I should see \"Select your departure to London\" for my chosen destination(src/test/java/uk/co/expedia/resources/featurefile/flight.feature:20)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1748502200,
  "status": "passed"
});
formatter.before({
  "duration": 16624934200,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": ": Verify user is able to search for the destination flights of their choice",
  "description": "",
  "id": "flight-feature-and-scenario-outline-for-5-different-destinations;:-verify-user-is-able-to-search-for-the-destination-flights-of-their-choice;;6",
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
  "name": "I enter departing date \"30/05/2020\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter returning date \"08/07/2020\"",
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
  "name": "I should see \"Select your departure to Mumbai\" for my chosen destination",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 584000,
  "status": "passed"
});
formatter.match({
  "location": "FlightsSteps.iClickOnFlightsTab()"
});
formatter.result({
  "duration": 1440775900,
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
  "duration": 2216200400,
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
  "duration": 1879315000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30/05/2020",
      "offset": 24
    }
  ],
  "location": "FlightsSteps.iEnterDepartingDate(String)"
});
formatter.result({
  "duration": 873411400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "08/07/2020",
      "offset": 24
    }
  ],
  "location": "FlightsSteps.iEnterReturningDate(String)"
});
formatter.result({
  "duration": 1015585000,
  "status": "passed"
});
formatter.match({
  "location": "FlightsSteps.iSelectNumberOfAdultsTravelling()"
});
formatter.result({
  "duration": 612715000,
  "status": "passed"
});
formatter.match({
  "location": "FlightsSteps.iSelectNumberOfChildrenTravellingAndTheirAge()"
});
formatter.result({
  "duration": 629955400,
  "status": "passed"
});
formatter.match({
  "location": "FlightsSteps.iClickOnSearchButton()"
});
formatter.result({
  "duration": 13120058000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Select your departure to Mumbai",
      "offset": 14
    }
  ],
  "location": "FlightsSteps.iShouldSeeForMyChosenDestination(String)"
});
formatter.result({
  "duration": 117653200,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c...t your departure to [Singapore]\u003e but was:\u003c...t your departure to [Mumbai]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat uk.co.expedia.utility.Utility.verifyTextAssertMethod(Utility.java:538)\r\n\tat uk.co.expedia.pages.SearchResultPage.verifyDestinationText(SearchResultPage.java:19)\r\n\tat uk.co.expedia.cucumber.stepdefs.FlightsSteps.iShouldSeeForMyChosenDestination(FlightsSteps.java:66)\r\n\tat ✽.Then I should see \"Select your departure to Mumbai\" for my chosen destination(src/test/java/uk/co/expedia/resources/featurefile/flight.feature:20)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1994676100,
  "status": "passed"
});
formatter.before({
  "duration": 15371472600,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": ": Verify user is able to search for the destination flights of their choice",
  "description": "",
  "id": "flight-feature-and-scenario-outline-for-5-different-destinations;:-verify-user-is-able-to-search-for-the-destination-flights-of-their-choice;;7",
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
  "name": "I enter departing date \"11/01/2021\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter returning date \"21/02/2021\"",
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
  "name": "I should see \"Select your departure to London\" for my chosen destination",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 442500,
  "status": "passed"
});
formatter.match({
  "location": "FlightsSteps.iClickOnFlightsTab()"
});
formatter.result({
  "duration": 1341040800,
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
  "duration": 1590027300,
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
  "duration": 1749790900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "11/01/2021",
      "offset": 24
    }
  ],
  "location": "FlightsSteps.iEnterDepartingDate(String)"
});
formatter.result({
  "duration": 714210500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "21/02/2021",
      "offset": 24
    }
  ],
  "location": "FlightsSteps.iEnterReturningDate(String)"
});
formatter.result({
  "duration": 833074800,
  "status": "passed"
});
formatter.match({
  "location": "FlightsSteps.iSelectNumberOfAdultsTravelling()"
});
