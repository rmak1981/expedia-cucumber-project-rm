package com.orangehrmlive.demo.pages;

import com.cucumber.listener.Reporter;
import com.orangehrmlive.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class EmployeeListPage extends Utility {

    private static final Logger log = LogManager.getLogger(EmployeeListPage.class.getName());

    @FindBy(xpath = "//a[@class='toggle tiptip")
    WebElement _employeeInformationText;

    @FindBy(id = "empsearch_employee_name_empName")
    WebElement _employeeNameField;

    @FindBy(id = "searchBtn")
    WebElement _searchButton;

    @FindBy(xpath = "//table[@id='resultTable']//tbody/tr/td[3]")
    WebElement _findEmployeeName;

    public void verifyEmployeeInformationText(String empInfo) {
        Reporter.addStepLog("verify employee information text" + _employeeInformationText.toString());
        waitUntilElementToBeClickable(_employeeInformationText, 20);
        verifyTextAssertMethod(_employeeInformationText, empInfo);
        log.info("verify employee information text" + _employeeInformationText.toString());
    }

    public void employeeNameField(String empName) {
        Reporter.addStepLog("Enter employee name: " + empName + " in the employeefield " + _employeeNameField.toString());
        waitUntilElementToBeClickable(_employeeNameField, 20);
        sendTextToElement(_employeeNameField, empName);
        log.info("Enter employee name: " + empName + " in the employeefield " + _employeeNameField.toString());
    }

    public void clickOnSearchButton() {
        Reporter.addStepLog("Click on search button" + _searchButton.toString());
        waitUntilElementToBeClickable(_searchButton, 20);
        clickOnElement(_searchButton);
        log.info("Click on search button" + _searchButton.toString());
    }

    public void verifyEmployeeNameSearchResult(String fName) {
        Reporter.addStepLog("Verify name searched in employee name is displayed: " + fName + " in the result table below " + _findEmployeeName.toString());
        waitUntilElementToBeClickable(_findEmployeeName, 20);
        verifyTextAssertMethod(_findEmployeeName, fName);
        log.info("Verify name searched is displayed: " + fName + " in the result table " + _findEmployeeName.toString());
    }
}
