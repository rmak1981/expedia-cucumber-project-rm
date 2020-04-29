package com.demo.nopcommerce.pages;

import com.cucumber.listener.Reporter;
import com.demo.nopcommerce.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
public class BuildYourOwnComputerPage extends Utility {

    private static final Logger log = LogManager.getLogger(BuildYourOwnComputerPage.class.getName());


    @FindBy(id = "product_attribute_3_7")
    WebElement _hdd400GBRadioBtn;

    @FindBy(id = "add-to-cart-button-1")
    WebElement _addToCartBtn;

    @FindBy(xpath = "//p[@class='content']")
    WebElement _productAddedToCartText;


    public void clickOnHDD400GBRadioButton() {
        Reporter.addStepLog("Click on hdd 400GB radio button" + _hdd400GBRadioBtn.toString());
        waitUntilElementToBeClickable(_hdd400GBRadioBtn, 20);
        radioButtonClick(_hdd400GBRadioBtn);
        log.info("Click on hdd 400GB radio button" + _hdd400GBRadioBtn.toString());
    }

    public void clickOnAddToCartBtn() {
        Reporter.addStepLog("Click on add to cart button" + _addToCartBtn.toString());
        waitUntilElementToBeClickable(_addToCartBtn, 20);
        clickOnElement(_addToCartBtn);
        log.info("Click on add to cart button" + _addToCartBtn.toString());
    }

    public void verifyTextProductAddedToShoppingCart(String str) {
        Reporter.addStepLog("Verify text: " + str + " is displayed on adding product to cart " + _productAddedToCartText.toString());
        waitUntilElementToBeClickable(_productAddedToCartText, 20);
        verifyTextAssertMethod(_productAddedToCartText, str);
        log.info("Verify text: " + str + " is displayed on adding product to cart " + _productAddedToCartText.toString());
    }


}
