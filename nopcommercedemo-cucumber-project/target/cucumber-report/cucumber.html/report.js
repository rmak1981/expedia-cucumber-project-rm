$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/demo/nopcommerce/resources/featurefile/book.feature");
formatter.feature({
  "line": 1,
  "name": "Book Feature",
  "description": "\r\nAs a user I want to view products on Books page",
  "id": "book-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 27587654600,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should navigate to Book page successfully",
  "description": "",
  "id": "book-feature;user-should-navigate-to-book-page-successfully",
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
  "name": "I click on Book Link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should navigate to Book page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 1111269100,
  "status": "passed"
});
formatter.match({
  "location": "BookSteps.iClickOnBookLink()"
});
formatter.result({
  "duration": 2650598000,
  "status": "passed"
});
formatter.match({
  "location": "BookSteps.iShouldNavigateToBookPageSuccessfully()"
});
formatter.result({
  "duration": 299706600,
  "status": "passed"
});
formatter.after({
  "duration": 1767414400,
  "status": "passed"
});
formatter.before({
  "duration": 23014503700,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "User should see results on Book page sorted by AtoZ",
  "description": "",
  "id": "book-feature;user-should-see-results-on-book-page-sorted-by-atoz",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on Book Link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I sort books by Name: A to Z",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see the products displayed on the books page sorted by alphabetic order",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 931800,
  "status": "passed"
});
formatter.match({
  "location": "BookSteps.iClickOnBookLink()"
});
formatter.result({
  "duration": 4529986200,
  "status": "passed"
});
formatter.match({
  "location": "BookSteps.iSortBooksByNameAToZ()"
});
formatter.result({
  "duration": 3320958800,
  "status": "passed"
});
formatter.match({
  "location": "BookSteps.iShouldSeeTheProductsDisplayedOnTheBooksPageSortedByAlphabeticOrder()"
});
formatter.result({
  "duration": 346062800,
  "status": "passed"
});
formatter.after({
  "duration": 1596294800,
  "status": "passed"
});
formatter.before({
  "duration": 19105246900,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "User should see prices on Books page sorted by LowToHigh",
  "description": "",
  "id": "book-feature;user-should-see-prices-on-books-page-sorted-by-lowtohigh",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 17,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I click on Book Link",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I sort books by Price: Low to High",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I should see the products displayed on the books page sorted by prices in ascending order",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 683300,
  "status": "passed"
});
formatter.match({
  "location": "BookSteps.iClickOnBookLink()"
});
formatter.result({
  "duration": 1602620600,
  "status": "passed"
});
formatter.match({
  "location": "BookSteps.iSortBooksByPriceLowToHigh()"
});
formatter.result({
  "duration": 1983414200,
  "status": "passed"
});
formatter.match({
  "location": "BookSteps.iShouldSeeTheProductsDisplayedOnTheBooksPageSortedByPricesInAscendingOrder()"
});
formatter.result({
  "duration": 307262000,
  "status": "passed"
});
formatter.after({
  "duration": 2046224100,
  "status": "passed"
});
formatter.uri("src/test/java/com/demo/nopcommerce/resources/featurefile/computer.feature");
formatter.feature({
  "line": 1,
  "name": "Computer Feature",
  "description": "\r\nAs a user I want to navigate to computer Page and select a product successfully",
  "id": "computer-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 19424513100,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "As a user I want to navigate to computer page successfully",
  "description": "",
  "id": "computer-feature;as-a-user-i-want-to-navigate-to-computer-page-successfully",
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
  "name": "I click on Computer link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I navigate to Computer page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 598800,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnComputerLink()"
});
formatter.result({
  "duration": 2221776800,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iNavigateToComputerPageSuccessfully()"
});
formatter.result({
  "duration": 251335700,
  "status": "passed"
});
formatter.after({
  "duration": 1749941100,
  "status": "passed"
});
formatter.before({
  "duration": 21503945400,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "As a user I want to select Build my own Computer product successfully",
  "description": "",
  "id": "computer-feature;as-a-user-i-want-to-select-build-my-own-computer-product-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on Computer link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I navigate to Computer page successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I click on Desktop link",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select build your own computer",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select HDD",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on add to cart",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "The product is added successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 905000,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnComputerLink()"
});
formatter.result({
  "duration": 1986424900,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iNavigateToComputerPageSuccessfully()"
});
formatter.result({
  "duration": 222458400,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnDesktopLink()"
});
formatter.result({
  "duration": 12480582000,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iSelectBuildYourOwnComputer()"
});
formatter.result({
  "duration": 15750760500,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iSelectHDD()"
});
formatter.result({
  "duration": 253354000,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnAddToCart()"
});
formatter.result({
  "duration": 223475000,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.theProductIsAddedSuccessfully()"
});
formatter.result({
  "duration": 1303291200,
  "status": "passed"
});
formatter.after({
  "duration": 1661130500,
  "status": "passed"
});
formatter.uri("src/test/java/com/demo/nopcommerce/resources/featurefile/login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Feature",
  "description": "\r\nAs a user I want to login to my nop commerce account",
  "id": "login-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 17481853500,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should navigate to Login page successfully",
  "description": "",
  "id": "login-feature;user-should-navigate-to-login-page-successfully",
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
  "name": "I click on Login Link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should navigate to Login page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 406400,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLoginLink()"
});
formatter.result({
  "duration": 1570517700,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iShouldNavigateToLoginPageSuccessfully()"
});
formatter.result({
  "duration": 292332600,
  "status": "passed"
});
formatter.after({
  "duration": 1653878300,
  "status": "passed"
});
formatter.before({
  "duration": 15885271800,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "User should Login successfully with valid credentials",
  "description": "",
  "id": "login-feature;user-should-login-successfully-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on Login Link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I enter email \"xyz13@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter password \"abc123\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should Login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 457500,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLoginLink()"
});
formatter.result({
  "duration": 1350948000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz13@gmail.com",
      "offset": 15
    }
  ],
  "location": "MyStepdefs.iEnterEmail(String)"
});
formatter.result({
  "duration": 465135400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 18
    }
  ],
  "location": "MyStepdefs.iEnterPassword(String)"
});
formatter.result({
  "duration": 426640900,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 13047030900,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iShouldLoginSuccessfully()"
});
formatter.result({
  "duration": 362747000,
  "status": "passed"
});
formatter.after({
  "duration": 1782256200,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 18,
  "name": "User should Login successfully with valid credentials",
  "description": "",
  "id": "login-feature;user-should-login-successfully-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I click on Login Link",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I enter email \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I enter password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I should Login successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 25,
  "name": "",
  "description": "",
  "id": "login-feature;user-should-login-successfully-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ],
      "line": 26,
      "id": "login-feature;user-should-login-successfully-with-valid-credentials;;1"
    },
    {
      "cells": [
        "xyz13@gmail.com",
        "abc123"
      ],
      "line": 27,
      "id": "login-feature;user-should-login-successfully-with-valid-credentials;;2"
    },
    {
      "cells": [
        "xyz1@gmail.com",
        "abc1234"
      ],
      "line": 28,
      "id": "login-feature;user-should-login-successfully-with-valid-credentials;;3"
    },
    {
      "cells": [
        "ram111@yahoo.com",
        "london3"
      ],
      "line": 29,
      "id": "login-feature;user-should-login-successfully-with-valid-credentials;;4"
    },
    {
      "cells": [
        "ram222@yahoo.com",
        "london1"
      ],
      "line": 30,
      "id": "login-feature;user-should-login-successfully-with-valid-credentials;;5"
    },
    {
      "cells": [
        "ram333@yahoo.com",
        "london2"
      ],
      "line": 31,
      "id": "login-feature;user-should-login-successfully-with-valid-credentials;;6"
    },
    {
      "cells": [
        "ram444@yahoo.com",
        "london4"
      ],
      "line": 32,
      "id": "login-feature;user-should-login-successfully-with-valid-credentials;;7"
    },
    {
      "cells": [
        "ram555@yahoo.com",
        "london5"
      ],
      "line": 33,
      "id": "login-feature;user-should-login-successfully-with-valid-credentials;;8"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 19432050200,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "User should Login successfully with valid credentials",
  "description": "",
  "id": "login-feature;user-should-login-successfully-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I click on Login Link",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I enter email \"xyz13@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I enter password \"abc123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I should Login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 1669600,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLoginLink()"
});
formatter.result({
  "duration": 1848205700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz13@gmail.com",
      "offset": 15
    }
  ],
  "location": "MyStepdefs.iEnterEmail(String)"
});
formatter.result({
  "duration": 369400600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 18
    }
  ],
  "location": "MyStepdefs.iEnterPassword(String)"
});
formatter.result({
  "duration": 271479200,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 12351197100,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iShouldLoginSuccessfully()"
});
formatter.result({
  "duration": 313423100,
  "status": "passed"
});
formatter.after({
  "duration": 1557707200,
  "status": "passed"
});
formatter.before({
  "duration": 19908494500,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "User should Login successfully with valid credentials",
  "description": "",
  "id": "login-feature;user-should-login-successfully-with-valid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I click on Login Link",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I enter email \"xyz1@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I enter password \"abc1234\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I should Login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 552200,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLoginLink()"
});
formatter.result({
  "duration": 879585600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz1@gmail.com",
      "offset": 15
    }
  ],
  "location": "MyStepdefs.iEnterEmail(String)"
});
formatter.result({
  "duration": 375159100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc1234",
      "offset": 18
    }
  ],
  "location": "MyStepdefs.iEnterPassword(String)"
});
formatter.result({
  "duration": 308039200,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 12556888800,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iShouldLoginSuccessfully()"
});
formatter.result({
  "duration": 257813800,
  "status": "passed"
});
formatter.after({
  "duration": 1497665600,
  "status": "passed"
});
formatter.before({
  "duration": 24730498600,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "User should Login successfully with valid credentials",
  "description": "",
  "id": "login-feature;user-should-login-successfully-with-valid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I click on Login Link",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I enter email \"ram111@yahoo.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I enter password \"london3\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I should Login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 343700,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLoginLink()"
});
formatter.result({
  "duration": 1815679000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ram111@yahoo.com",
      "offset": 15
    }
  ],
  "location": "MyStepdefs.iEnterEmail(String)"
});
formatter.result({
  "duration": 364045000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "london3",
      "offset": 18
    }
  ],
  "location": "MyStepdefs.iEnterPassword(String)"
});
formatter.result({
  "duration": 248538200,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 12593087700,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iShouldLoginSuccessfully()"
});
formatter.result({
  "duration": 556416000,
  "status": "passed"
});
formatter.after({
  "duration": 2237866400,
  "status": "passed"
});
formatter.before({
  "duration": 17549820200,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "User should Login successfully with valid credentials",
  "description": "",
  "id": "login-feature;user-should-login-successfully-with-valid-credentials;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I click on Login Link",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I enter email \"ram222@yahoo.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I enter password \"london1\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I should Login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 392000,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLoginLink()"
});
formatter.result({
  "duration": 1871007400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ram222@yahoo.com",
      "offset": 15
    }
  ],
  "location": "MyStepdefs.iEnterEmail(String)"
});
formatter.result({
  "duration": 554078200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "london1",
      "offset": 18
    }
  ],
  "location": "MyStepdefs.iEnterPassword(String)"
});
formatter.result({
  "duration": 379513300,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 12172962800,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iShouldLoginSuccessfully()"
});
formatter.result({
  "duration": 351236600,
  "status": "passed"
});
formatter.after({
  "duration": 2110176400,
  "status": "passed"
});
formatter.before({
  "duration": 17255495600,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "User should Login successfully with valid credentials",
  "description": "",
  "id": "login-feature;user-should-login-successfully-with-valid-credentials;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I click on Login Link",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I enter email \"ram333@yahoo.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I enter password \"london2\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I should Login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 560100,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLoginLink()"
});
formatter.result({
  "duration": 1927885100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ram333@yahoo.com",
      "offset": 15
    }
  ],
  "location": "MyStepdefs.iEnterEmail(String)"
});
formatter.result({
  "duration": 439687600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "london2",
      "offset": 18
    }
  ],
  "location": "MyStepdefs.iEnterPassword(String)"
});
formatter.result({
  "duration": 382518400,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 12597132300,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iShouldLoginSuccessfully()"
});
formatter.result({
  "duration": 305917300,
  "status": "passed"
});
formatter.after({
  "duration": 1867016600,
  "status": "passed"
});
formatter.before({
  "duration": 16769148400,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "User should Login successfully with valid credentials",
  "description": "",
  "id": "login-feature;user-should-login-successfully-with-valid-credentials;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I click on Login Link",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I enter email \"ram444@yahoo.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I enter password \"london4\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I should Login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 2410500,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLoginLink()"
});
formatter.result({
  "duration": 1762078000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ram444@yahoo.com",
      "offset": 15
    }
  ],
  "location": "MyStepdefs.iEnterEmail(String)"
});
formatter.result({
  "duration": 343299000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "london4",
      "offset": 18
    }
  ],
  "location": "MyStepdefs.iEnterPassword(String)"
});
formatter.result({
  "duration": 310682500,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 11991995100,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iShouldLoginSuccessfully()"
});
formatter.result({
  "duration": 253370100,
  "status": "passed"
});
formatter.after({
  "duration": 1863064500,
  "status": "passed"
});
formatter.before({
  "duration": 16592048200,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "User should Login successfully with valid credentials",
  "description": "",
  "id": "login-feature;user-should-login-successfully-with-valid-credentials;;8",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I click on Login Link",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I enter email \"ram555@yahoo.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I enter password \"london5\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I should Login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 332500,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLoginLink()"
});
formatter.result({
  "duration": 1228483800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ram555@yahoo.com",
      "offset": 15
    }
  ],
  "location": "MyStepdefs.iEnterEmail(String)"
});
formatter.result({
  "duration": 438963200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "london5",
      "offset": 18
    }
  ],
  "location": "MyStepdefs.iEnterPassword(String)"
});
formatter.result({
  "duration": 300106500,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 12679262000,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iShouldLoginSuccessfully()"
});
formatter.result({
  "duration": 610204500,
  "status": "passed"
});
formatter.after({
  "duration": 2248329900,
  "status": "passed"
});
formatter.uri("src/test/java/com/demo/nopcommerce/resources/featurefile/registration.feature");
formatter.feature({
  "line": 1,
  "name": "Registration Feature",
  "description": "\r\nAs a user I want to register an account on nop commerce website",
  "id": "registration-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 15506986400,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should navigate to Register page successfully",
  "description": "",
  "id": "registration-feature;user-should-navigate-to-register-page-successfully",
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
  "name": "I click on Register Link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should navigate to Register page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 1314600,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 1625060700,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iShouldNavigateToRegisterPageSuccessfully()"
});
formatter.result({
  "duration": 170493600,
  "status": "passed"
});
formatter.after({
  "duration": 2333140900,
  "status": "passed"
});
formatter.before({
  "duration": 17433322100,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "User should Register and create an account successfully",
  "description": "",
  "id": "registration-feature;user-should-register-and-create-an-account-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on Register Link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I enter first name \"Harrow\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter last name \"GS\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter day \"18\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter month \"May\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter year \"1989\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I enter random email address",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I enter company name \"GSTEST\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I enter register password \"abc123\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I enter register confirm password \"abc123\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I should be able to Register and create an account successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 1867100,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 1882918800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harrow",
      "offset": 20
    }
  ],
  "location": "RegisterSteps.iEnterFirstName(String)"
});
formatter.result({
  "duration": 538669700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GS",
      "offset": 19
    }
  ],
  "location": "RegisterSteps.iEnterLastName(String)"
});
formatter.result({
  "duration": 280524800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "18",
      "offset": 13
    }
  ],
  "location": "RegisterSteps.iEnterDay(String)"
});
formatter.result({
  "duration": 339125600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "May",
      "offset": 15
    }
  ],
  "location": "RegisterSteps.iEnterMonth(String)"
});
formatter.result({
  "duration": 327387000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1989",
      "offset": 14
    }
  ],
  "location": "RegisterSteps.iEnterYear(String)"
});
formatter.result({
  "duration": 439891700,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iEnterRandomEmailAddress()"
});
formatter.result({
  "duration": 500309400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GSTEST",
      "offset": 22
    }
  ],
  "location": "RegisterSteps.iEnterCompanyName(String)"
});
formatter.result({
  "duration": 379195900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 27
    }
  ],
  "location": "RegisterSteps.iEnterRegisterPassword(String)"
});
formatter.result({
  "duration": 339821200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 35
    }
  ],
  "location": "RegisterSteps.iEnterRegisterConfirmPassword(String)"
});
formatter.result({
  "duration": 312244500,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 11964186500,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iShouldBeAbleToRegisterAndCreateAnAccountSuccessfully()"
});
formatter.result({
  "duration": 157329300,
  "status": "passed"
});
formatter.after({
  "duration": 1980785000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 26,
  "name": "Verify error message when user tries to register account without entering first name",
  "description": "",
  "id": "registration-feature;verify-error-message-when-user-tries-to-register-account-without-entering-first-name",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 27,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "I click on Register Link",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I enter last name \"\u003clast name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter day \"\u003cday\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter month \"\u003cmonth\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I enter year \"\u003cyear\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I enter email address \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I enter company name \"\u003ccompany name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I enter register password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I enter register confirm password \"\u003cconfirm password\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I click on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I should see the error message \"\u003cerrorMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 39,
  "name": "",
  "description": "",
  "id": "registration-feature;verify-error-message-when-user-tries-to-register-account-without-entering-first-name;",
  "rows": [
    {
      "cells": [
        "last name",
        "day",
        "month",
        "year",
        "email",
        "company name",
        "password",
        "confirm password",
        "errorMessage"
      ],
      "line": 40,
      "id": "registration-feature;verify-error-message-when-user-tries-to-register-account-without-entering-first-name;;1"
    },
    {
      "cells": [
        "S",
        "2",
        "February",
        "2008",
        "abc@gmail.com",
        "Prime",
        "abc123",
        "abc123",
        "First name is required."
      ],
      "line": 41,
      "id": "registration-feature;verify-error-message-when-user-tries-to-register-account-without-entering-first-name;;2"
    },
    {
      "cells": [
        "S",
        "8",
        "May",
        "2009",
        "def@gmail.com",
        "Testing",
        "def123",
        "def123",
        "First name is required."
      ],
      "line": 42,
      "id": "registration-feature;verify-error-message-when-user-tries-to-register-account-without-entering-first-name;;3"
    },
    {
      "cells": [
        "SS",
        "29",
        "November",
        "2010",
        "ghi@gmail.com",
        "Square1",
        "ghi123",
        "ghi123",
        "First name is required."
      ],
      "line": 43,
      "id": "registration-feature;verify-error-message-when-user-tries-to-register-account-without-entering-first-name;;4"
    },
    {
      "cells": [
        "One",
        "5",
        "February",
        "2014",
        "jkl@gmail.com",
        "Interior Collection",
        "jkl123",
        "jkl123",
        "First name is required."
      ],
      "line": 44,
      "id": "registration-feature;verify-error-message-when-user-tries-to-register-account-without-entering-first-name;;5"
    },
    {
      "cells": [
        "Two",
        "1",
        "January",
        "2020",
        "mno@gmail.com",
        "HarrowGS",
        "mno123",
        "mno123",
        "First name is required."
      ],
      "line": 45,
      "id": "registration-feature;verify-error-message-when-user-tries-to-register-account-without-entering-first-name;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 16468498900,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Verify error message when user tries to register account without entering first name",
  "description": "",
  "id": "registration-feature;verify-error-message-when-user-tries-to-register-account-without-entering-first-name;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 27,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "I click on Register Link",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I enter last name \"S\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter day \"2\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter month \"February\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I enter year \"2008\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I enter email address \"abc@gmail.com\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I enter company name \"Prime\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I enter register password \"abc123\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I enter register confirm password \"abc123\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I click on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I should see the error message \"First name is required.\"",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 342500,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 1105786500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "S",
      "offset": 19
    }
  ],
  "location": "RegisterSteps.iEnterLastName(String)"
});
formatter.result({
  "duration": 380192200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 13
    }
  ],
  "location": "RegisterSteps.iEnterDay(String)"
});
formatter.result({
  "duration": 334778600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "February",
      "offset": 15
    }
  ],
  "location": "RegisterSteps.iEnterMonth(String)"
});
formatter.result({
  "duration": 327425200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2008",
      "offset": 14
    }
  ],
  "location": "RegisterSteps.iEnterYear(String)"
});
formatter.result({
  "duration": 383515300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc@gmail.com",
      "offset": 23
    }
  ],
  "location": "RegisterSteps.iEnterEmailAddress(String)"
});
formatter.result({
  "duration": 407821800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Prime",
      "offset": 22
    }
  ],
  "location": "RegisterSteps.iEnterCompanyName(String)"
});
formatter.result({
  "duration": 337260500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 27
    }
  ],
  "location": "RegisterSteps.iEnterRegisterPassword(String)"
});
formatter.result({
  "duration": 358046600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 35
    }
  ],
  "location": "RegisterSteps.iEnterRegisterConfirmPassword(String)"
});
formatter.result({
  "duration": 309653800,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 309331200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "First name is required.",
      "offset": 32
    }
  ],
  "location": "RegisterSteps.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 264689700,
  "status": "passed"
});
formatter.after({
  "duration": 1875794200,
  "status": "passed"
});
formatter.before({
  "duration": 15470335200,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "Verify error message when user tries to register account without entering first name",
  "description": "",
  "id": "registration-feature;verify-error-message-when-user-tries-to-register-account-without-entering-first-name;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 27,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "I click on Register Link",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I enter last name \"S\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter day \"8\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter month \"May\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I enter year \"2009\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I enter email address \"def@gmail.com\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I enter company name \"Testing\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I enter register password \"def123\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I enter register confirm password \"def123\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I click on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I should see the error message \"First name is required.\"",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 1329500,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 1276568200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "S",
      "offset": 19
    }
  ],
  "location": "RegisterSteps.iEnterLastName(String)"
});
formatter.result({
  "duration": 377237900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8",
      "offset": 13
    }
  ],
  "location": "RegisterSteps.iEnterDay(String)"
});
formatter.result({
  "duration": 439200400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "May",
      "offset": 15
    }
  ],
  "location": "RegisterSteps.iEnterMonth(String)"
});
formatter.result({
  "duration": 396276100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2009",
      "offset": 14
    }
  ],
  "location": "RegisterSteps.iEnterYear(String)"
});
formatter.result({
  "duration": 370155300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "def@gmail.com",
      "offset": 23
    }
  ],
  "location": "RegisterSteps.iEnterEmailAddress(String)"
});
formatter.result({
  "duration": 487803800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Testing",
      "offset": 22
    }
  ],
  "location": "RegisterSteps.iEnterCompanyName(String)"
});
formatter.result({
  "duration": 413157300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "def123",
      "offset": 27
    }
  ],
  "location": "RegisterSteps.iEnterRegisterPassword(String)"
});
formatter.result({
  "duration": 351002400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "def123",
      "offset": 35
    }
  ],
  "location": "RegisterSteps.iEnterRegisterConfirmPassword(String)"
});
formatter.result({
  "duration": 301507500,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 357168900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "First name is required.",
      "offset": 32
    }
  ],
  "location": "RegisterSteps.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 189128600,
  "status": "passed"
});
formatter.after({
  "duration": 2155075600,
  "status": "passed"
});
formatter.before({
  "duration": 16089650000,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "Verify error message when user tries to register account without entering first name",
  "description": "",
  "id": "registration-feature;verify-error-message-when-user-tries-to-register-account-without-entering-first-name;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 27,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "I click on Register Link",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I enter last name \"SS\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter day \"29\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter month \"November\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I enter year \"2010\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I enter email address \"ghi@gmail.com\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I enter company name \"Square1\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I enter register password \"ghi123\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I enter register confirm password \"ghi123\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I click on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I should see the error message \"First name is required.\"",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 283500,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 1781331000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SS",
      "offset": 19
    }
  ],
  "location": "RegisterSteps.iEnterLastName(String)"
});
formatter.result({
  "duration": 309550400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "29",
      "offset": 13
    }
  ],
  "location": "RegisterSteps.iEnterDay(String)"
});
formatter.result({
  "duration": 316667900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "November",
      "offset": 15
    }
  ],
  "location": "RegisterSteps.iEnterMonth(String)"
});
formatter.result({
  "duration": 255119100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2010",
      "offset": 14
    }
  ],
  "location": "RegisterSteps.iEnterYear(String)"
});
formatter.result({
  "duration": 342243000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ghi@gmail.com",
      "offset": 23
    }
  ],
  "location": "RegisterSteps.iEnterEmailAddress(String)"
});
formatter.result({
  "duration": 417184100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Square1",
      "offset": 22
    }
  ],
  "location": "RegisterSteps.iEnterCompanyName(String)"
});
formatter.result({
  "duration": 384085700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ghi123",
      "offset": 27
    }
  ],
  "location": "RegisterSteps.iEnterRegisterPassword(String)"
});
formatter.result({
  "duration": 407857100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ghi123",
      "offset": 35
    }
  ],
  "location": "RegisterSteps.iEnterRegisterConfirmPassword(String)"
});
formatter.result({
  "duration": 240431300,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 228640900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "First name is required.",
      "offset": 32
    }
  ],
  "location": "RegisterSteps.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 159357100,
  "status": "passed"
});
formatter.after({
  "duration": 1671920400,
  "status": "passed"
});
formatter.before({
  "duration": 20280331300,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "Verify error message when user tries to register account without entering first name",
  "description": "",
  "id": "registration-feature;verify-error-message-when-user-tries-to-register-account-without-entering-first-name;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 27,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "I click on Register Link",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I enter last name \"One\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter day \"5\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter month \"February\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I enter year \"2014\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I enter email address \"jkl@gmail.com\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I enter company name \"Interior Collection\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I enter register password \"jkl123\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I enter register confirm password \"jkl123\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I click on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I should see the error message \"First name is required.\"",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 336800,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 1251934500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "One",
      "offset": 19
    }
  ],
  "location": "RegisterSteps.iEnterLastName(String)"
});
formatter.result({
  "duration": 205435500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 13
    }
  ],
  "location": "RegisterSteps.iEnterDay(String)"
});
formatter.result({
  "duration": 263451400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "February",
      "offset": 15
    }
  ],
  "location": "RegisterSteps.iEnterMonth(String)"
});
formatter.result({
  "duration": 217010200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2014",
      "offset": 14
    }
  ],
  "location": "RegisterSteps.iEnterYear(String)"
});
formatter.result({
  "duration": 201317300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jkl@gmail.com",
      "offset": 23
    }
  ],
  "location": "RegisterSteps.iEnterEmailAddress(String)"
});
formatter.result({
  "duration": 249375800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Interior Collection",
      "offset": 22
    }
  ],
  "location": "RegisterSteps.iEnterCompanyName(String)"
});
formatter.result({
  "duration": 271259800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jkl123",
      "offset": 27
    }
  ],
  "location": "RegisterSteps.iEnterRegisterPassword(String)"
});
formatter.result({
  "duration": 188564300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jkl123",
      "offset": 35
    }
  ],
  "location": "RegisterSteps.iEnterRegisterConfirmPassword(String)"
});
formatter.result({
  "duration": 202393400,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 225092000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "First name is required.",
      "offset": 32
    }
  ],
  "location": "RegisterSteps.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 112224600,
  "status": "passed"
});
formatter.after({
  "duration": 1548343600,
  "status": "passed"
});
formatter.before({
  "duration": 19497781200,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "Verify error message when user tries to register account without entering first name",
  "description": "",
  "id": "registration-feature;verify-error-message-when-user-tries-to-register-account-without-entering-first-name;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 27,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "I click on Register Link",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I enter last name \"Two\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter day \"1\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter month \"January\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I enter year \"2020\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I enter email address \"mno@gmail.com\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I enter company name \"HarrowGS\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I enter register password \"mno123\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I enter register confirm password \"mno123\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I click on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I should see the error message \"First name is required.\"",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 325200,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 1594753200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Two",
      "offset": 19
    }
  ],
  "location": "RegisterSteps.iEnterLastName(String)"
});
formatter.result({
  "duration": 259925700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 13
    }
  ],
  "location": "RegisterSteps.iEnterDay(String)"
});
formatter.result({
  "duration": 327134300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "January",
      "offset": 15
    }
  ],
  "location": "RegisterSteps.iEnterMonth(String)"
});
formatter.result({
  "duration": 279533800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2020",
      "offset": 14
    }
  ],
  "location": "RegisterSteps.iEnterYear(String)"
});
formatter.result({
  "duration": 236442300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mno@gmail.com",
      "offset": 23
    }
  ],
  "location": "RegisterSteps.iEnterEmailAddress(String)"
});
formatter.result({
  "duration": 324099800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HarrowGS",
      "offset": 22
    }
  ],
  "location": "RegisterSteps.iEnterCompanyName(String)"
});
formatter.result({
  "duration": 256842600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mno123",
      "offset": 27
    }
  ],
  "location": "RegisterSteps.iEnterRegisterPassword(String)"
});
formatter.result({
  "duration": 246387700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mno123",
      "offset": 35
    }
  ],
  "location": "RegisterSteps.iEnterRegisterConfirmPassword(String)"
});
formatter.result({
  "duration": 202411300,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 228851600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "First name is required.",
      "offset": 32
    }
  ],
  "location": "RegisterSteps.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 125410700,
  "status": "passed"
});
formatter.after({
  "duration": 1245634400,
  "status": "passed"
});
});