package uk.gov.harrow.pages;

import com.cucumber.listener.Reporter;
import com.sun.xml.internal.ws.addressing.W3CAddressingConstants;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import uk.gov.harrow.utility.Utility;

public class LoginPage extends Utility {

    private static final Logger log = LogManager.getLogger(LoginPage.class.getName());

    @FindBy(xpath = "//li[@class='navbar-text myprofile_salutation']")
    WebElement _welcomeText;

    @FindBy(id = "username-input")
    WebElement _emailField;

    @FindBy(id = "password-input")
    WebElement _passwordField;

    @FindBy(id = "submitBtnSignIn")
    WebElement _loginButton;

    @FindBy(id = "password.errors")
    WebElement _errorMessage;


    public String getWelcomeText() {
        Reporter.addStepLog("Get Welcome Guest text: " + _welcomeText.toString());
        waitUntilElementToBeClickable(_welcomeText,20);
        log.info("Get Welcome Guest text: " + _welcomeText.toString());
        return getTextFromElement(_welcomeText);
    }

    public void enterEmail(String email) {
        Reporter.addStepLog(" Enter email: " + email + " in email field " + _emailField.toString());
        waitUntilElementToBeClickable(_emailField,20);
        sendTextToElement(_emailField,email);
        log.info(" Enter email: " + email + " in email field " + _emailField.toString());
    }

    public void enterPassword(String pwd) {
        Reporter.addStepLog(" Enter password: "+pwd+" in password field " +_passwordField.toString());
        waitUntilElementToBeClickable(_passwordField,20);
        sendTextToElement(_passwordField,pwd);
        log.info(" Enter password: "+pwd+" in password field " +_passwordField.toString());
    }

    public void clickOnLoginButton() {
        Reporter.addStepLog(" Click in login button "+_loginButton.toString());
        waitUntilElementToBeClickable(_loginButton,20);
        clickOnElement(_loginButton);
        log.info(" Click in login button "+_loginButton.toString());
    }
    public String getErrorText() {
        Reporter.addStepLog(" Get Invalid Username/Password supplied text: "+_errorMessage.toString());
        waitUntilElementToBeClickable(_errorMessage,20);
        log.info(" Get Invalid Username/Password supplied text: "+_errorMessage.toString());
        return getTextFromElement(_errorMessage);
    }

}
