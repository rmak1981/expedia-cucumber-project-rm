package com.bank.pages;

import com.bank.utility.Utility;
import com.cucumber.listener.Reporter;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class CustomersPage extends Utility {

    private static final Logger log = LogManager.getLogger(CustomersPage.class.getName());

    @FindBy(xpath = "//input[@placeholder='Search Customer']")
    WebElement _searchCustomerField;

    @FindBy(xpath = "//button[contains(text(),'Delete')]")
    WebElement _deleteBtn;

    public void searchCustomerName(String custName) {
        Reporter.addStepLog(" Seacrch CustomerName: " + custName + " in the field " + _searchCustomerField.toString());
        waitUntilElementToBeClickable(_searchCustomerField, 20);
        sendTextToElement(_searchCustomerField, custName);
        log.info(" Seacrch CustomerName: " + custName + " in the field " + _searchCustomerField.toString());

    }

    public void clickOnDeleteButton() {
        Reporter.addStepLog(" Click on Deleter button: " + _deleteBtn.toString());
        waitUntilElementToBeClickable(_deleteBtn, 20);
        clickOnElement(_deleteBtn);
        log.info(" Click on Deleter button: " + _deleteBtn.toString());
    }

}
