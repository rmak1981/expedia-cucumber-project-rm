package com.orangehrmlive.demo.pages;

import com.cucumber.listener.Reporter;
import com.orangehrmlive.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class AddEmployeePage extends Utility {

    private static final Logger log = LogManager.getLogger(PimPage.class.getName());

    @FindBy(linkText = "Add Employee")
    WebElement _addEmployeeText;

    @FindBy(id = "firstName")
    WebElement _firstName;

    @FindBy(id = "lastName")
    WebElement _lastName;

    @FindBy(id = "user_name")
    WebElement _userName;

    @FindBy(id = "status")
    WebElement _statusEnabledDropDown;

    @FindBy(id = "user_password")
    WebElement _userPassword;

    @FindBy(id = "re_password")
    WebElement _userConfirmPassword;

    @FindBy(id = "btnSave")
    WebElement _saveButton;

    public void verifyAddEmployeeText(String employeeText) {
        Reporter.addStepLog("Verify text Add Employee text: "+_addEmployeeText.toString());
        log.info("Verify text Add Employee text: "+_addEmployeeText.toString());
        waitUntilElementToBeClickable(_addEmployeeText,20);
        verifyTextAssertMethod(_addEmployeeText,employeeText);
    }

    public void enterFirstName(String fName) {
        Reporter.addStepLog(" Enter first name:" + fName + " into the field " + _firstName.toString());
        waitUntilElementToBeClickable(_firstName, 20);
        sendTextToElement(_firstName, fName);
        log.info(" Enter first name:" + fName + " into the field " + _firstName.toString());
    }

    public void enterLastName(String lName) {
        Reporter.addStepLog(" Enter last name:" + lName + " into the field " + _lastName.toString());
        waitUntilElementToBeClickable(_lastName, 20);
        sendTextToElement(_lastName, lName);
        log.info(" Enter last name:" + lName + " into the field " + _lastName.toString());
    }

    public void enterUsername(String uName) {
        Reporter.addStepLog(" Enter last name:" + uName + " into the field " + _userName.toString());
        waitUntilElementToBeClickable(_userName, 20);
        sendTextToElement(_userName, uName);
        log.info(" Enter last name:" + uName + " into the field " + _userName.toString());
    }

    public void selectEnabledStatusFromDropDown() {
        Reporter.addStepLog("Select status enabled from drop down" + _statusEnabledDropDown.toString());
        waitUntilElementToBeClickable(_statusEnabledDropDown,20);
        selectByValueFromDropDown(_statusEnabledDropDown,"Enabled");
        log.info("Select status enabled from drop down" + _statusEnabledDropDown.toString());
    }

    public void clickOnSaveButton() {
        Reporter.addStepLog("Click on save button: "+ _saveButton.toString());
        waitUntilElementToBeClickable(_saveButton,20);
        clickOnElement(_saveButton);
        log.info("Click on save button: "+ _saveButton.toString());
    }


}
