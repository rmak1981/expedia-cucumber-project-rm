package com.orangehrmlive.demo.cucumber.stepdefs;

import com.orangehrmlive.demo.pages.AccountPage;
import com.orangehrmlive.demo.pages.AddEmployeePage;
import com.orangehrmlive.demo.pages.EmployeeListPage;
import com.orangehrmlive.demo.pages.PimPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;

public class DashBoardSteps {
    @And("^I click on pim button$")
    public void iClickOnPimButton() {
        new AccountPage().clickOnPimButton();
    }

    @And("^I click on add employee button$")
    public void iClickOnAddEmployeeButton() {
        new PimPage().clickOnAddEmployeeButton();
    }

    @Then("^I am on add employee page$")
    public void iAmOnAddEmployeePage() {
        new AddEmployeePage().verifyAddEmployeeText("Add Employee");
    }

    @And("^I click on employee list button$")
    public void iClickOnEmployeeListButton() {
        new PimPage().clickOnEmployeeListButton();
    }

    @And("^I enter employee name in the employee name search field$")
    public void iEnterEmployeeNameInTheEmployeeNameSearchField() {
        new EmployeeListPage().employeeNameField("Steven");
    }


    @And("^I click on search button$")
    public void iClickOnSearchButton() {
        new EmployeeListPage().clickOnSearchButton();
    }

    @Then("^I should see the searched employee name in the result table below$")
    public void iShouldSeeTheSearchedEmployeeNameInTheResultTableBelow() {
        new EmployeeListPage().verifyEmployeeNameSearchResult("Steven");
    }

}
