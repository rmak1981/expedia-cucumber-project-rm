package com.bank.pages;

import com.bank.utility.Utility;
import com.cucumber.listener.Reporter;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class OpenAccountPage extends Utility {

    private static final Logger log = LogManager.getLogger(OpenAccountPage.class.getName());

    @FindBy(id = "userSelect")
    WebElement _customerNameField;

    @FindBy(id = "currency")
    WebElement _currencyField;

    @FindBy(xpath = "//button[contains(text(),'Process')]")
    WebElement _processBtn;


    public void searchCustomerCreatedInFirstTest(int index) {
        Reporter.addStepLog(" Search for Customer from the drop down " + _customerNameField.toString());
        waitUntilElementToBeClickable(_customerNameField, 20);
      selectByIndexFromDropDown(_customerNameField,index);
         log.info(" Search for Customer from the drop down " + _customerNameField.toString());
    }

    public void selectCurrencyPound(int index) {
        Reporter.addStepLog(" Select Currency from drop down: " + _currencyField.toString());
        waitUntilElementToBeClickable(_currencyField, 20);
        selectByIndexFromDropDown(_currencyField, index);
        log.info(" Select Currency from drop down: " + _currencyField.toString());
    }

    public void clickOnProcessButtonAndVerifyAlertText(String popTxt) {
        Reporter.addStepLog(" Click on Process button: " + _processBtn.toString());
        waitUntilElementToBeClickable(_processBtn, 20);
        clickOnElement(_processBtn);

        verifyTextAssertMethodForAlert(popTxt);
        alertAccept();

        log.info(" Click on Process button: " + _processBtn.toString());
    }

}

