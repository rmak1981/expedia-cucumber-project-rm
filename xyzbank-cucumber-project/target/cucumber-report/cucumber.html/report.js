$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/bank/resources/featurefile/customer.feature");
formatter.feature({
  "line": 1,
  "name": "Customer Feature",
  "description": "\r\nAs a user I want to login and make a deposit",
  "id": "customer-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 34456462600,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "User should add a customer successfully",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on BankManagerLogin button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click on Add Customer button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter First name",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter Last name \"Snape\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter Post code \"HG3 14WB\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on Add Customer button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should add customer successfully",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on Open Account button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I search for the customer by name that I added",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select currency Pound",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should open account successfully",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on Home button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I am on Home page",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 4073145900,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnBankManagerLoginButton()"
});
formatter.result({
  "duration": 1337049600,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnAddCustomerButton()"
});
formatter.result({
  "duration": 493052400,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iEnterFirstName()"
});
formatter.result({
  "duration": 549803800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Snape",
      "offset": 19
    }
  ],
  "location": "MyStepdefs.iEnterLastName(String)"
});
formatter.result({
  "duration": 215243900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HG3 14WB",
      "offset": 19
    }
  ],
  "location": "MyStepdefs.iEnterPostCode(String)"
});
formatter.result({
  "duration": 237450000,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnAddCustomerButton()"
});
formatter.result({
  "duration": 163581400,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iShouldAddCustomerSuccessfully()"
});
formatter.result({
  "duration": 270130900,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnOpenAccountButton()"
});
formatter.result({
  "duration": 206992900,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iSearchForTheCustomerByNameThatIAdded()"
});
formatter.result({
  "duration": 820639200,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iSelectCurrencyPound()"
});
formatter.result({
  "duration": 277225300,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iShouldOpenAccountSuccessfully()"
});
formatter.result({
  "duration": 238025200,
  "status": "passed"
});
formatter.match({
  "location": "CustomerSteps.iClickOnHomeButton()"
});
formatter.result({
  "duration": 232430200,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 329600,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "User should login to their account successfully",
  "description": "",
  "id": "customer-feature;user-should-login-to-their-account-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 22,
  "name": "I click on CustomerLogin button",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I search for my name",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I should login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "CustomerSteps.iClickOnCustomerLoginButton()"
});
formatter.result({
  "duration": 245960200,
  "status": "passed"
});
formatter.match({
  "location": "CustomerSteps.iSearchForMyName()"
});
formatter.result({
  "duration": 487148100,
  "status": "passed"
});
formatter.match({
  "location": "CustomerSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 193753200,
  "status": "passed"
});
formatter.match({
  "location": "CustomerSteps.iShouldLoginSuccessfully()"
});
formatter.result({
  "duration": 716054300,
  "status": "passed"
});
formatter.after({
  "duration": 172700,
  "status": "passed"
});
formatter.before({
  "duration": 14765224500,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "User should add a customer successfully",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on BankManagerLogin button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click on Add Customer button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter First name",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter Last name \"Snape\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter Post code \"HG3 14WB\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on Add Customer button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should add customer successfully",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on Open Account button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I search for the customer by name that I added",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select currency Pound",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should open account successfully",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on Home button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I am on Home page",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 444500,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnBankManagerLoginButton()"
});
formatter.result({
  "duration": 1773345700,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnAddCustomerButton()"
});
formatter.result({
  "duration": 2202298000,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iEnterFirstName()"
});
formatter.result({
  "duration": 629965900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Snape",
      "offset": 19
    }
  ],
  "location": "MyStepdefs.iEnterLastName(String)"
});
formatter.result({
  "duration": 277823800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HG3 14WB",
      "offset": 19
    }
  ],
  "location": "MyStepdefs.iEnterPostCode(String)"
});
formatter.result({
  "duration": 201572800,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnAddCustomerButton()"
});
formatter.result({
  "duration": 165168100,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iShouldAddCustomerSuccessfully()"
});
formatter.result({
  "duration": 195160600,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnOpenAccountButton()"
});
formatter.result({
  "duration": 196488500,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iSearchForTheCustomerByNameThatIAdded()"
});
formatter.result({
  "duration": 441250000,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iSelectCurrencyPound()"
});
formatter.result({
  "duration": 292966100,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iShouldOpenAccountSuccessfully()"
});
formatter.result({
  "duration": 202905000,
  "status": "passed"
});
formatter.match({
  "location": "CustomerSteps.iClickOnHomeButton()"
});
formatter.result({
  "duration": 243012100,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 277300,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Verify the message when user makes a deposit in their account",
  "description": "",
  "id": "customer-feature;verify-the-message-when-user-makes-a-deposit-in-their-account",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 28,
  "name": "I click on CustomerLogin button",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "I search for my name",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click on Deposit tab",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I enter amount to be deposited",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I click on Deposit button",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I should see a message displayed \"Deposit Successful\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CustomerSteps.iClickOnCustomerLoginButton()"
});
formatter.result({
  "duration": 156425100,
  "status": "passed"
});
formatter.match({
  "location": "CustomerSteps.iSearchForMyName()"
});
formatter.result({
  "duration": 508437000,
  "status": "passed"
});
formatter.match({
  "location": "CustomerSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 220388800,
  "status": "passed"
});
formatter.match({
  "location": "CustomerSteps.iClickOnDepositTab()"
});
formatter.result({
  "duration": 394367900,
  "status": "passed"
});
formatter.match({
  "location": "CustomerSteps.iEnterAmountToBeDeposited()"
});
formatter.result({
  "duration": 864413400,
  "status": "passed"
});
formatter.match({
  "location": "CustomerSteps.iClickOnDepositButton()"
});
formatter.result({
  "duration": 186985400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Deposit Successful",
      "offset": 34
    }
  ],
  "location": "CustomerSteps.iShouldSeeAMessageDisplayed(String)"
});
formatter.result({
  "duration": 128809500,
  "status": "passed"
});
formatter.after({
  "duration": 52100,
  "status": "passed"
});
});