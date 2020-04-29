package com.bank.pages;

import com.bank.utility.Utility;
import com.cucumber.listener.Reporter;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class BankManagerLoginPage extends Utility {

    private static final Logger log = LogManager.getLogger(BankManagerLoginPage.class.getName());

    @FindBy(xpath = "//button[contains(text(),'Add Customer')]")
    WebElement _addCustomer;

    @FindBy(xpath = "//button[contains(text(),'Open Account')]")
    WebElement _openAccount;

    @FindBy(xpath = "//button[contains(text(),'Customers')]")
    WebElement _customers;

    public void clickOnAddCustomerTab() {
        Reporter.addStepLog(" Click on AddCustomer tab: " + _addCustomer.toString());
        waitUntilElementToBeClickable(_addCustomer, 10);
        clickOnElement(_addCustomer);
        log.info(" Click on AddCustomer tab: " + _addCustomer.toString());
    }

    public void clickOnOpenAccountTab() {
        Reporter.addStepLog(" Click on OpenAccount tab: " + _openAccount.toString());
        waitUntilElementToBeClickable(_openAccount, 10);
        clickOnElement(_openAccount);
        log.info(" Click on OpenAccount tab: " + _openAccount.toString());
    }

    public void clickOnCustomersTab() {
        Reporter.addStepLog(" Click on Customer tab: " + _customers.toString());
        waitUntilElementToBeClickable(_customers, 10);
        clickOnElement(_customers);
        log.info(" Click on Customer tab: " + _customers.toString());
    }


}


