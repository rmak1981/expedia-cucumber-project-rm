package uk.co.expedia.pages;

import com.cucumber.listener.Reporter;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.Alert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import uk.co.expedia.utility.Utility;

public class HomePage extends Utility {

    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    @FindBy(xpath = "//button[@class='accept-button']/span")
    WebElement _acceptCookies;

    @FindBy(id = "tab-flight-tab-hp")
    WebElement _flightTab;


    @FindBy(id = "primary-header-flight")
    WebElement _flightLink;

    @FindBy(id = "header-account-menu")
    WebElement _accountTab;


    public void clickOnFlightTab() {
        Reporter.addStepLog(" Click on flight tab: " + _flightTab.toString());
        clickOnElement(_acceptCookies);
        clickOnElement(_flightTab);
        log.info(" Click on flight tab: " + _flightTab.toString());
    }

    public void clickOnFlightLink() {
        Reporter.addStepLog(" Click on flight hotel and car tab: " + _flightLink.toString());
        clickOnElement(_acceptCookies);
        clickOnElement(_flightLink);
        log.info(" Click on flight hotel and car tab: " + _flightLink.toString());
    }

    public void clickOnAccountTab() {
        Reporter.addStepLog(" Click on account tab: " + _accountTab.toString());
        clickOnElement(_acceptCookies);
        clickOnElement(_accountTab);
        log.info(" Click on account tab: " + _accountTab.toString());
    }

}
