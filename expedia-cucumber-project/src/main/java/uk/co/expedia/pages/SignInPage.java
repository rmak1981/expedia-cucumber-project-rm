package uk.co.expedia.pages;

import com.cucumber.listener.Reporter;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import uk.co.expedia.utility.Utility;

public class SignInPage extends Utility {

    private static final Logger log = LogManager.getLogger(SignInPage.class.getName());

    @FindBy(id = "gss-signin-email")
    WebElement _emailField;

    @FindBy(id = "gss-signin-password")
    WebElement _passwordField;

    @FindBy(id = "gss-signin-submit")
    WebElement _signInTab;

    @FindBy(id = "gss-signin-login-google-button")
    WebElement _pageText;

    @FindBy(id = "gss-signin-incorrect-email-or-password")
    WebElement _errorMessage;


    public void sendTextToEmailField(String username) {
        Reporter.addStepLog(" Enter email: " + username + " to email field " + _emailField.toString());
        sendTextToElement(_emailField, username);
        log.info(" Enter email: " + username + " to email field " + _emailField.toString());
    }

    public void sendTextToPasswordField(String pwd) {
        Reporter.addStepLog(" Enter password: " + pwd + " to password field " + _passwordField.toString());
        sendTextToElement(_passwordField, pwd);
        log.info(" Enter password: " + pwd + " to password field " + _passwordField.toString());
    }

    public void clickOnSignInTab() {
        Reporter.addStepLog(" Click on sign in tab: " + _signInTab.toString());
        clickOnElement(_signInTab);
        log.info(" Click on sign in tab: " + _signInTab.toString());
    }

    public void verifySignInPageText(String pgTxt) {
        Reporter.addStepLog(" Verify text: " + pgTxt + " is dispalyed on sign in page " + _pageText.toString());
        verifyTextAssertMethod(_pageText, pgTxt);
        log.info(" Verify text: " + pgTxt + " is dispalyed on sign in page " + _pageText.toString());
    }

    public void verifyErrorMessage(String errMsg) {
        Reporter.addStepLog(" Verify error message: " + errMsg + " is displayed " + _errorMessage.toString());
        verifyTextAssertMethod(_errorMessage, errMsg);
        log.info(" Verify error message: " + errMsg + " is displayed " + _errorMessage.toString());
    }

}
