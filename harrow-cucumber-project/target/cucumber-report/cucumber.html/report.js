$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/uk/gov/harrow/resources/featurefile/harrow.feature");
formatter.feature({
  "line": 1,
  "name": "Harrow Login Test",
  "description": "As a user I want to navigate to login page",
  "id": "harrow-login-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 89135272200,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "User should navigate to Login page successfully",
  "description": "",
  "id": "harrow-login-test;user-should-navigate-to-login-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on Login Link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should navigate to Login page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 2646348700,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLoginLink()"
});
formatter.result({
  "duration": 19744810501,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iShouldNavigateToLoginPageSuccessfully()"
});
formatter.result({
  "duration": 1794281200,
  "status": "passed"
});
formatter.after({
  "duration": 2849176700,
  "status": "passed"
});
formatter.before({
  "duration": 33564700401,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Verify the error message when user login with invalid credentials",
  "description": "",
  "id": "harrow-login-test;verify-the-error-message-when-user-login-with-invalid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I click on Login Link",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I enter email \"xyz@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter password \"abc123\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see the error message \"Invalid Username/Password supplied\"",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 467600,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLoginLink()"
});
formatter.result({
  "duration": 16336800601,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz@gmail.com",
      "offset": 15
    }
  ],
  "location": "MyStepdefs.iEnterEmail(String)"
});
formatter.result({
  "duration": 1055639400,
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
  "duration": 564066399,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 2809694500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid Username/Password supplied",
      "offset": 32
    }
  ],
  "location": "MyStepdefs.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 487451899,
  "status": "passed"
});
formatter.after({
  "duration": 3878178299,
  "status": "passed"
});
formatter.uri("src/test/java/uk/gov/harrow/resources/featurefile/service.feature");
formatter.feature({
  "line": 1,
  "name": "Services function",
  "description": "As a user I want to check the services on Harrow website",
  "id": "services-function",
  "keyword": "Feature"
});
formatter.before({
  "duration": 29621564900,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "User should navigate to Services page successfully",
  "description": "",
  "id": "services-function;user-should-navigate-to-services-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on services button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should navigate to Services page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 1346800,
  "status": "passed"
});
formatter.match({
  "location": "ServicesSteps.iClickOnServicesButton()"
});
formatter.result({
  "duration": 1095388699,
  "status": "passed"
});
formatter.match({
  "location": "ServicesSteps.iShouldNavigateToServicesPageSuccessfully()"
});
formatter.result({
  "duration": 1256422600,
  "status": "passed"
});
formatter.after({
  "duration": 1429147799,
  "status": "passed"
});
formatter.before({
  "duration": 19953709500,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Verify text when user closes Services page",
  "description": "",
  "id": "services-function;verify-text-when-user-closes-services-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I click on services button",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I should navigate to Services page successfully",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on close button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see \"SERVICES\" text",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 964500,
  "status": "passed"
});
formatter.match({
  "location": "ServicesSteps.iClickOnServicesButton()"
});
formatter.result({
  "duration": 351803199,
  "status": "passed"
});
formatter.match({
  "location": "ServicesSteps.iShouldNavigateToServicesPageSuccessfully()"
});
formatter.result({
  "duration": 1009773600,
  "status": "passed"
});
formatter.match({
  "location": "ServicesSteps.iClickOnCloseButton()"
});
formatter.result({
  "duration": 466509801,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SERVICES",
      "offset": 14
    }
  ],
  "location": "ServicesSteps.iShouldSeeText(String)"
});
formatter.result({
  "duration": 530557500,
  "status": "passed"
});
formatter.after({
  "duration": 1546921800,
  "status": "passed"
});
});