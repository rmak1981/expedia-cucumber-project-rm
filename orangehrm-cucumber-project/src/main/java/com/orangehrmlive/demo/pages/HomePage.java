package com.orangehrmlive.demo.pages;

import com.cucumber.listener.Reporter;
import com.orangehrmlive.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class HomePage extends Utility {

    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    @FindBy(css = "input#txtUsername")
    WebElement _usernameField;

    @FindBy(css = "input#txtPassword")
    WebElement _passwordField;

    @FindBy(css = "input.button")
    WebElement _loginBtn;

    @FindBy(css = "div#logInPanelHeading")
    WebElement _loginPanelText;

    public void clickAndSendTextToUsernameField(String userName) {
        Reporter.addStepLog(" Enter email:" + userName + " into the field " + _usernameField.toString());
        waitUntilElementToBeClickable(_usernameField, 20);
        sendTextToElement(_usernameField, userName);
        log.info(" Enter email:" + userName + " into the field " + _usernameField.toString());
    }

    public void clickAndSendTextToPasswordField(String passwd) {
        Reporter.addStepLog(" Enter password:" + passwd + " into the field " + _passwordField.toString());
        waitUntilElementToBeClickable(_passwordField, 20);
        sendTextToElement(_passwordField, passwd);
        log.info(" Enter password:" + passwd + " into the field " + _passwordField.toString());
    }

    public void clickOnLoginBtn() {
        Reporter.addStepLog(" Click on login button " + _loginBtn.toString());
        waitUntilElementToBeClickable(_loginBtn, 20);
        clickOnElement(_loginBtn);
        log.info(" Click on login button " + _loginBtn.toString());
    }

    public void verifyTextLoginPanelText(String logPanelText) {
        Reporter.addStepLog(" Verify text: " + logPanelText + " is displayed " + _loginPanelText.toString());
        waitUntilElementToBeClickable(_loginBtn, 20);
        verifyTextAssertMethod(_loginPanelText, logPanelText);
        log.info(" Verify text: " + logPanelText + " is displayed " + _loginPanelText.toString());
    }

}
