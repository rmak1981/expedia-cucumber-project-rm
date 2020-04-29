package com.bank.pages;

import com.bank.utility.Utility;
import com.cucumber.listener.Reporter;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;


public class CustomerLoginPage extends Utility {

    private static final Logger log = LogManager.getLogger(CustomerLoginPage.class.getName());

    @FindBy(id = "userSelect")
    WebElement _yourNameField;

    @FindBy(xpath = "//button[contains(text(),'Login')]")
    WebElement _loginBtn;

    @FindBy(xpath = "//label[contains(text(),'Your Name')]")
    WebElement _yourNameText;


    public void searchCustomer(int index) {
        Reporter.addStepLog(" Search customer: " + _yourNameField.toString());
        waitUntilElementToBeClickable(_yourNameField, 20);
            selectByIndexFromDropDown(_yourNameField,index);
        log.info(" Search customer: " + _yourNameField.toString());
    }

    public void clickOnLoginButton() {
        Reporter.addStepLog(" Search customer: " + _yourNameField.toString());
        waitUntilElementToBeClickable(_loginBtn, 20);
        clickOnElement(_loginBtn);
        log.info(" Search customer: " + _yourNameField.toString());
    }

    public void verifyYourNameTextDisplayed(String yourName) {
        Reporter.addStepLog(" Verify your name: " + yourName + " is displayed " + _yourNameText.toString());
        waitUntilElementToBeClickable(_yourNameText, 20);
        verifyTextAssertMethod(_yourNameText, yourName);
        log.info(" Verify your name: " + yourName + " is displayed " + _yourNameText.toString());
    }

}

