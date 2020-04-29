package com.bank.cucumber.stepdefs;

import com.bank.pages.AccountPage;
import com.bank.pages.CustomerLoginPage;
import com.bank.pages.HomePage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class CustomerSteps {

    @And("^I click on Home button$")
    public void iClickOnHomeButton() {
        new HomePage().clickOnHomeButton();
    }


    @Given("^I click on CustomerLogin button$")
    public void iClickOnCustomerLoginButton() {
        new HomePage().clickOnCustomerLoginTab();
    }

    @When("^I search for my name$")
    public void iSearchForMyName() {
        new CustomerLoginPage().searchCustomer(6);
    }

    @And("^I click on Login button$")
    public void iClickOnLoginButton() {
        new CustomerLoginPage().clickOnLoginButton();
    }

    @Then("^I should login successfully$")
    public void iShouldLoginSuccessfully() {
        new AccountPage().verifyLogoutTabDisplayed("Logout");
    }

    @Given("^I click on Deposit tab$")
    public void iClickOnDepositTab() {
        new AccountPage().clickOnDepositTab();
    }

    @When("^I enter amount to be deposited$")
    public void iEnterAmountToBeDeposited() {
        new AccountPage().enterAmount("100");
    }

    @And("^I click on Deposit button$")
    public void iClickOnDepositButton() {
        new AccountPage().clickOnDepositButton();
    }

    @Then("^I should see a message displayed \"([^\"]*)\"$")
    public void iShouldSeeAMessageDisplayed(String msgDisplayed) {
        new AccountPage().verifyMessageDepositSuccessful(msgDisplayed);
    }

}
