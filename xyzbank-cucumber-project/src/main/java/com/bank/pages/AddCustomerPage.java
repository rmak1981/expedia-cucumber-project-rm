package com.bank.pages;

import com.bank.utility.Utility;
import com.cucumber.listener.Reporter;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class AddCustomerPage extends Utility {

    private static final Logger log = LogManager.getLogger(AddCustomerPage.class.getName());

    @FindBy(xpath = "//input[@placeholder='First Name']")
    WebElement _firstNameField;

    @FindBy(xpath = "//input[@placeholder='Last Name']")
    WebElement _lastNameField;

    @FindBy(xpath = "//input[@placeholder='Post Code']")
    WebElement _postCodeField;

    @FindBy(css = "button.btn.btn-default")
    WebElement _addCustomerBtn;

    public void enterFirstName() {
        String fName = "Severus" + Utility.getRandomNumber(2);
        Reporter.addStepLog(" Enter first name: " + fName + " in the field " + _firstNameField.toString());
        waitUntilElementToBeClickable(_firstNameField, 10);
        sendTextToElement(_firstNameField, fName);
        log.info(" Enter first name: " + fName + " in the field " + _firstNameField.toString());
    }

    public void enterLastName(String lName) {
        Reporter.addStepLog(" Enter last name: " + lName + " in the field " + _lastNameField.toString());
        waitUntilElementToBeClickable(_lastNameField, 10);
        sendTextToElement(_lastNameField, lName);
        log.info(" Enter last name: " + lName + " in the field " + _lastNameField.toString());
    }

    public void enterPostCode(String pcode) {
        Reporter.addStepLog(" Enter postcode: " + pcode + " in the field " + _postCodeField.toString());
        waitUntilElementToBeClickable(_postCodeField, 10);
        sendTextToElement(_postCodeField, pcode);
        log.info(" Enter postcode: " + pcode + " in the field " + _postCodeField.toString());
    }

    public void clickOnAddCustomerButtonAndVerifyAlertText(String popTxt) {
        Reporter.addStepLog(" Click on AddCustomer button: " + _addCustomerBtn.toString());
        waitUntilElementToBeClickable(_addCustomerBtn, 10);
        clickOnElement(_addCustomerBtn);

        verifyTextAssertMethodForAlert(popTxt);
        alertAccept();

        log.info(" Click on AddCustomer button: " + _addCustomerBtn.toString());
    }

}
