package com.orangehrmlive.demo.pages;

import com.cucumber.listener.Reporter;
import com.orangehrmlive.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class AccountPage extends Utility {


    private static final Logger log = LogManager.getLogger(AccountPage.class.getName());

    @FindBy(css = "a.panelTrigger")
    WebElement _welcomeAdmin;

    @FindBy(xpath = "//a[contains(text(),'Logout')]")
    WebElement _logoutLink;

    @FindBy(xpath = "//a[@id='menu_pim_viewPimModule']")
    WebElement _pimButton;

    public void verifyTextWelcomeAdmin(String welText) {
        Reporter.addStepLog(" Verify text: " + welText + " is displayed " + _welcomeAdmin.toString());
        waitUntilElementToBeClickable(_welcomeAdmin, 20);
        verifyTextAssertMethod(_welcomeAdmin, welText);
        log.info(" Verify text: " + welText + " is displayed " + _welcomeAdmin.toString());
    }

    public void clickOnWelcomeAdmin() {
        Reporter.addStepLog(" Click on welcome admin button " + _welcomeAdmin.toString());
        waitUntilElementToBeClickable(_welcomeAdmin, 20);
        clickOnElement(_welcomeAdmin);
        log.info(" Click on welcome admin button " + _welcomeAdmin.toString());
    }

    public void clickOnLogoutLink() {
        Reporter.addStepLog(" Click on logout link " + _logoutLink.toString());
        waitUntilElementToBeClickable(_logoutLink, 20);
        clickOnElement(_logoutLink);
        log.info(" Click on logout link " + _logoutLink.toString());
    }

    public void clickOnPimButton() {
        Reporter.addStepLog("Click on Pim button: "+_pimButton.toString());
        waitUntilElementToBeClickable(_pimButton,20);
        clickOnElement(_pimButton);
        log.info("Click on Pim button: "+_pimButton.toString());
    }

}
