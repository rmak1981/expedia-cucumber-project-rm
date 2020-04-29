package com.demo.nopcommerce.pages;

import com.cucumber.listener.Reporter;
import com.demo.nopcommerce.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class RegistrationCompletePage extends Utility {

    private static final Logger log = LogManager.getLogger(RegistrationCompletePage.class.getName());

    @FindBy(xpath = "//div[@class='master-wrapper-content']//div[text()='Your registration completed']")
    WebElement _yourRegistrationCompletedText;


    public void verifyRegistrationCompleteText(String regCompleteTxt) {
        Reporter.addStepLog(" Verify text: " + regCompleteTxt + " is displayed on registration completion " + _yourRegistrationCompletedText.toString());
        waitUntilElementToBeClickable(_yourRegistrationCompletedText,20);
        verifyTextAssertMethod(_yourRegistrationCompletedText, regCompleteTxt);
        log.info(" Verify text: " + regCompleteTxt + " is displayed on registration completion " + _yourRegistrationCompletedText.toString());
    }

}
