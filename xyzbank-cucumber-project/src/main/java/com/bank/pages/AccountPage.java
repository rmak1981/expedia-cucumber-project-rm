package com.bank.pages;

import com.bank.utility.Utility;
import com.cucumber.listener.Reporter;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class AccountPage extends Utility {


    private static final Logger log = LogManager.getLogger(AccountPage.class.getName());

    @FindBy(xpath = "//button[contains(text(),'Transactions')]")
    WebElement _transactionTab;

    @FindBy(xpath = "//button[contains(text(),'Deposit')]")
    WebElement _depositTab;

    @FindBy(xpath = "//button[contains(text(),'Withdrawl')]")
    WebElement _withdrawTab;

    @FindBy(xpath = "//button[contains(text(),'Logout')]")
    WebElement _logoutBtn;

    @FindBy(xpath = "//input[@placeholder='amount']")
    WebElement _amountField;

    @FindBy(xpath = "//button[1][contains(text(),'Deposit')]")
    WebElement _depositBtn;

    @FindBy(xpath = "//span[contains(text(),'Deposit Successful')]")
    WebElement _depositSuccessText;

    @FindBy(xpath = "//button[1][contains(text(),'Withdraw')]")
    WebElement _withdrawBtn;

    @FindBy(xpath = "//span[contains(text(),'Transaction successful')]")
    WebElement _transactionsSuccessText;


    public void verifyLogoutTabDisplayed(String logText) {
        Reporter.addStepLog(" Verify text: " + logText + " is displayed" + _logoutBtn.toString());
        waitUntilElementToBeClickable(_logoutBtn, 5);
        verifyTextAssertMethod(_logoutBtn, logText);
        log.info(" Verify text: " + logText + " is displayed" + _logoutBtn.toString());

    }

    public void clickOnLogout() {
        Reporter.addStepLog(" Click on Logout button " + _logoutBtn.toString());
        clickOnElement(_logoutBtn);
        log.info(" Click on Logout button " + _logoutBtn.toString());
    }

    public void clickOnDepositTab() {
        Reporter.addStepLog(" Click on Deposit tab " + _depositTab.toString());
        clickOnElement(_depositTab);
        log.info(" Click on Deposit tab " + _depositTab.toString());
    }

    public void clickOnWithdrawlTab() {
        Reporter.addStepLog(" Click on Withdrawl tab " + _withdrawTab.toString());
        clickOnElement(_withdrawTab);
        log.info(" Click on Withdrawl tab " + _withdrawTab.toString());
    }

    public void enterAmount(String amnt) {
        Reporter.addStepLog(" Enter Amount: " + amnt + " in the amount field " + _amountField.toString());
        waitUntilElementToBeClickable(_amountField,20);
        sendTextToElement(_amountField, amnt);
        log.info(" Enter Amount: " + amnt + " in the amount field " + _amountField.toString());
    }

    public void clickOnDepositButton() {
        Reporter.addStepLog(" Click on Deposit button: " + _depositBtn.toString());
        waitUntilElementToBeClickable(_depositBtn, 20);
        clickOnElement(_depositBtn);
        log.info(" Click on Deposit button: " + _depositBtn.toString());
    }

    public void clickOnWithdrawButton() {
        Reporter.addStepLog(" Click on Withdraw button: " + _withdrawBtn.toString());
        waitUntilElementToBeClickable(_withdrawBtn, 20);
        clickOnElement(_withdrawBtn);
        log.info(" Click on Withdraw button: " + _withdrawBtn.toString());
    }

    public void verifyMessageDepositSuccessful(String depstText) {
        Reporter.addStepLog(" Verify text: " + depstText + " is displayed " + _depositSuccessText.toString());
        waitUntilElementToBeClickable(_depositSuccessText, 20);
        verifyTextAssertMethod(_depositSuccessText, depstText);
        log.info(" Verify text: " + depstText + " is displayed " + _depositSuccessText.toString());
    }

    public void verifyMessageTransactionSuccessful(String transText) {
        Reporter.addStepLog(" Verify text: " + transText + " is displayed " + _transactionsSuccessText.toString());
        waitUntilElementToBeClickable(_transactionsSuccessText, 20);
        verifyTextAssertMethod(_transactionsSuccessText, transText);
        log.info(" Verify text: " + transText + " is displayed " + _transactionsSuccessText.toString());
    }

}
