package com.demo.nopcommerce.pages;

import com.cucumber.listener.Reporter;
import com.demo.nopcommerce.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class DesktopPage extends Utility {

    private static final Logger log = LogManager.getLogger(DesktopPage.class.getName());


    @FindBy(xpath = "//h2[@class='product-title']/a[contains(text(),'Build your own computer')]")
    WebElement _buildYourOwnComputer;


    public void clickOnBuildYourOwnComputer() {
        Reporter.addStepLog("Click on Build your own Computer" + _buildYourOwnComputer.toString());
        waitUntilElementToBeClickable(_buildYourOwnComputer, 20);
        clickOnElement(_buildYourOwnComputer);
        log.info("Click on Build your own Computer" + _buildYourOwnComputer.toString());
    }

}
