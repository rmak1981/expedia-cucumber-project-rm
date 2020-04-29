$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/orangehrmlive/demo/resources/featurefile/dashboard.feature");
formatter.feature({
  "line": 1,
  "name": "Dashboard feature",
  "description": "\r\nAs a user I want to add an employee",
  "id": "dashboard-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 52908200299,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should navigate to add employee page",
  "description": "",
  "id": "dashboard-feature;user-should-navigate-to-add-employee-page",
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
  "name": "I enter username \"Admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter password \"admin123\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on pim button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on add employee button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I am on add employee page",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 1469074300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 18
    }
  ],
  "location": "MyStepdefs.iEnterUsername(String)"
});
formatter.result({
  "duration": 1729893700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 18
    }
  ],
  "location": "MyStepdefs.iEnterPassword(String)"
});
formatter.result({
  "duration": 402932300,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 2598536700,
  "status": "passed"
});
formatter.match({
  "location": "DashBoardSteps.iClickOnPimButton()"
});
formatter.result({
  "duration": 3751130000,
  "status": "passed"
});
formatter.match({
  "location": "DashBoardSteps.iClickOnAddEmployeeButton()"
});
formatter.result({
  "duration": 1330012900,
  "status": "passed"
});
formatter.match({
  "location": "DashBoardSteps.iAmOnAddEmployeePage()"
});
formatter.result({
  "duration": 1679186900,
  "status": "passed"
});
formatter.after({
  "duration": 1729144000,
  "status": "passed"
});
formatter.before({
  "duration": 19129712600,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "User should search an employee by their name successfully",
  "description": "",
  "id": "dashboard-feature;user-should-search-an-employee-by-their-name-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I enter username \"Admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I enter password \"admin123\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click on pim button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on employee list button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I enter employee name in the employee name search field",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on search button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I should see the searched employee name in the result table below",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 721000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 18
    }
  ],
  "location": "MyStepdefs.iEnterUsername(String)"
});
formatter.result({
  "duration": 360221600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 18
    }
  ],
  "location": "MyStepdefs.iEnterPassword(String)"
});
formatter.result({
  "duration": 290332300,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 4956127700,
  "status": "passed"
});
formatter.match({
  "location": "DashBoardSteps.iClickOnPimButton()"
});
formatter.result({
  "duration": 2629538000,
  "status": "passed"
});
formatter.match({
  "location": "DashBoardSteps.iClickOnEmployeeListButton()"
});
formatter.result({
  "duration": 849535500,
  "status": "passed"
});
formatter.match({
  "location": "DashBoardSteps.iEnterEmployeeNameInTheEmployeeNameSearchField()"
});
formatter.result({
  "duration": 891228400,
  "status": "passed"
});
formatter.match({
  "location": "DashBoardSteps.iClickOnSearchButton()"
});
formatter.result({
  "duration": 817384801,
  "status": "passed"
});
formatter.match({
  "location": "DashBoardSteps.iShouldSeeTheSearchedEmployeeNameInTheResultTableBelow()"
});
formatter.result({
  "duration": 41085909900,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: Proxy element for: DefaultElementLocator \u0027By.xpath: //a[contains(text(),\u0027Linda\u0027)]\u0027 (tried for 20 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat com.orangehrmlive.demo.utility.Utility.waitUntilElementToBeClickable(Utility.java:84)\r\n\tat com.orangehrmlive.demo.pages.EmployeeListPage.verifyEmployeeNameSearchResult(EmployeeListPage.java:49)\r\n\tat com.orangehrmlive.demo.cucumber.stepdefs.DashBoardSteps.iShouldSeeTheSearchedEmployeeNameInTheResultTableBelow(DashBoardSteps.java:44)\r\n\tat ✽.Then I should see the searched employee name in the result table below(src/test/java/com/orangehrmlive/demo/resources/featurefile/dashboard.feature:23)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[contains(text(),\u0027Linda\u0027)]\"}\n  (Session info: chrome\u003d81.0.4044.122)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-3M1HFB0\u0027, ip: \u0027192.168.0.13\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 81.0.4044.122, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\HEMALS~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:56966}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: e531c57c2ea2b1ee78b410bb47859c92\n*** Element info: {Using\u003dxpath, value\u003d//a[contains(text(),\u0027Linda\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy19.isDisplayed(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.elementIfVisible(ExpectedConditions.java:314)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:43)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:300)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:297)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$23.apply(ExpectedConditions.java:670)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$23.apply(ExpectedConditions.java:666)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat com.orangehrmlive.demo.utility.Utility.waitUntilElementToBeClickable(Utility.java:84)\r\n\tat com.orangehrmlive.demo.pages.EmployeeListPage.verifyEmployeeNameSearchResult(EmployeeListPage.java:49)\r\n\tat com.orangehrmlive.demo.cucumber.stepdefs.DashBoardSteps.iShouldSeeTheSearchedEmployeeNameInTheResultTableBelow(DashBoardSteps.java:44)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:230)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:58)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 3800769299,
  "status": "passed"
});
formatter.uri("src/test/java/com/orangehrmlive/demo/resources/featurefile/loginlogout.feature");
formatter.feature({
  "line": 1,
  "name": "Login \u0026 Logout feature",
  "description": "\r\nAs a user I want to login \u0026 logout on orangehrmlive website",
  "id": "login-\u0026-logout-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 22267322000,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should login successfully with valid credentials",
  "description": "",
  "id": "login-\u0026-logout-feature;user-should-login-successfully-with-valid-credentials",
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
  "name": "I enter username \"Admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter password \"admin123\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I should login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 3437099,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 18
    }
  ],
  "location": "MyStepdefs.iEnterUsername(String)"
});
formatter.result({
  "duration": 621052700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 18
    }
  ],
  "location": "MyStepdefs.iEnterPassword(String)"
});
formatter.result({
  "duration": 266149201,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 3517074800,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iShouldLoginSuccessfully()"
});
formatter.result({
  "duration": 211726000,
  "status": "passed"
});
formatter.after({
  "duration": 2360719200,
  "status": "passed"
});
formatter.before({
  "duration": 16978949299,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "verify text on the home page when user logs out successfully",
  "description": "",
  "id": "login-\u0026-logout-feature;verify-text-on-the-home-page-when-user-logs-out-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I enter username \"Admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I enter password \"admin123\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on welcome admin link and logout link",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I should see the text \"LOGIN Panel\"",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 1126701,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 18
    }
  ],
  "location": "MyStepdefs.iEnterUsername(String)"
});
formatter.result({
  "duration": 236685900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 18
    }
  ],
  "location": "MyStepdefs.iEnterPassword(String)"
});
formatter.result({
  "duration": 377647300,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 1853367900,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnWelcomeAdminLinkAndLogoutLink()"
});
formatter.result({
  "duration": 12177611400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LOGIN Panel",
      "offset": 23
    }
  ],
  "location": "MyStepdefs.iShouldSeeTheText(String)"
});
formatter.result({
  "duration": 256795500,
  "status": "passed"
});
formatter.after({
  "duration": 2013068701,
  "status": "passed"
});
});