package uk.gov.harrow.pages;

import com.cucumber.listener.Reporter;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import uk.gov.harrow.utility.Utility;

public class ServicePage extends Utility {

    private static final Logger log = LogManager.getLogger(ServicePage.class.getName());

    @FindBy(xpath = "//html//body//header//section//div//div//button//span[contains(text(),'Close')]")
    WebElement _closeButton;

    @FindBy(xpath = "//a[contains(text(),'Adult Social Care')]")
    WebElement _adultSocialCareText;


    public void clickOnCloseButton() {
        Reporter.addStepLog(" Click on close button "+_closeButton.toString());
        waitUntilElementToBeClickable(_closeButton,20);
        clickOnElement(_closeButton);
        log.info(" Click on close button "+_closeButton.toString());
    }

    public String getAdultSocialCareText() {
        Reporter.addStepLog(" Get Adult Social Care text: " + _adultSocialCareText.toString());
        log.info(" Get Adult Social Care text: " + _adultSocialCareText.toString());
        waitUntilElementToBeClickable(_adultSocialCareText,20);
        return getTextFromElement(_adultSocialCareText);
    }

}
