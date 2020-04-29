package com.demo.nopcommerce.pages;

import com.cucumber.listener.Reporter;
import com.demo.nopcommerce.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class ComputerPage extends Utility {

    private static final Logger log = LogManager.getLogger(ComputerPage.class.getName());


    @FindBy(xpath = "//div[@class='page-title']/h1")
    WebElement _computerPageText;

    @FindBy(xpath = "//li[@class='inactive']//a[@href='/desktops']")
    WebElement _desktopsLink;


    public void verifyComputerPageText(String str) {
        Reporter.addStepLog("Verify text: "+str+" is displayed on Computer page "+_computerPageText.toString());
        waitUntilElementToBeClickable(_computerPageText,20);
        verifyTextAssertMethod(_computerPageText,str);
        log.info("Verify text: "+str+" is displayed on Computer page "+_computerPageText.toString());
    }

    public void clickOnDesktopsLink() {
        Reporter.addStepLog("Click on Desktop link: "+_desktopsLink.toString());
        waitUntilElementToBeClickable(_desktopsLink,20);
        clickOnElement(_desktopsLink);
        log.info("Click on Desktop link: "+_desktopsLink.toString());
    }

}
