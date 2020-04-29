package com.demo.nopcommerce.pages;

import com.cucumber.listener.Reporter;
import com.demo.nopcommerce.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class LoginPage extends Utility {

    private static final Logger log = LogManager.getLogger(LoginPage.class.getName());

    @FindBy(css = "input#Email")
    WebElement _emailField;

    @FindBy(css = "input#Password")
    WebElement _passwordField;

    @FindBy(xpath = "//input[@class='button-1 login-button']")
    WebElement _loginBtn;

    @FindBy(xpath = "//div[@class='page-title']//h1")
    WebElement _welcomeText;


    public void enterEmailId(String un) {
        Reporter.addStepLog(" Enter email: " + un + " to email filed " + _emailField.toString());
        waitUntilElementToBeClickable(_emailField, 20);
        sendTextToElement(_emailField, un);
        log.info(" Enter email: " + un + " to email filed " + _emailField.toString());
    }

    public void enterPassword(String pwd) {
        Reporter.addStepLog(" Enter password: " + pwd + " to password field " + _passwordField.toString());
        waitUntilElementToBeClickable(_passwordField, 20);
        sendTextToElement(_passwordField, pwd);
        log.info(" Enter password: " + pwd + " to password field " + _passwordField.toString());

    }

    public void clickOnLoginBtn() {
        Reporter.addStepLog(" Click on Login button: " + _loginBtn.toString());
        waitUntilElementToBeClickable(_loginBtn, 20);
        clickOnElement(_loginBtn);
        log.info(" Click on Login button: " + _loginBtn.toString());
    }

    public void verifyWelcomeText(String welTxt) {
        Reporter.addStepLog(" Verify Text: " + welTxt + " is displayed on Login page " + _welcomeText.toString());
        waitUntilElementToBeClickable(_welcomeText,20);
        verifyTextAssertMethod(_welcomeText,welTxt);
        log.info(" Verify Text: " + welTxt + " is displayed on Login page " + _welcomeText.toString());
    }


}
