package uk.co.expedia.pages;

import com.cucumber.listener.Reporter;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import uk.co.expedia.utility.Utility;

public class AccountPage extends Utility {

    private static final Logger log = LogManager.getLogger(AccountPage.class.getName());

    @FindBy(id = "header-account-signin-button")
    WebElement _signInBtn;

    @FindBy(id = "header-exclusive-deals")
    WebElement _pageText;

    public void clickOnSignInBtn() {
        Reporter.addStepLog(" Click on sign in button: " + _signInBtn.toString());
        clickOnElement(_signInBtn);
        log.info(" Click on sign in button: " + _signInBtn.toString());
    }

    public void mouseHoverOnSignInBtn() {
        Reporter.addStepLog(" Mouse hover on sign in button: " + _signInBtn.toString());
        mouseHover(_signInBtn);
        log.info(" Mouse hover on sign in button: " + _signInBtn.toString());
    }

    public void verifyAccountPageText(String pgTxt) {
        Reporter.addStepLog(" Verify text: " + pgTxt + "  is displayed on account page " + _pageText.toString());
        verifyTextAssertMethod(_pageText, pgTxt);
        log.info(" Verify text: " + pgTxt + "  is displayed on account page " + _pageText.toString());
    }

}

