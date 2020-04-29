package com.orangehrmlive.demo.pages;

import com.cucumber.listener.Reporter;
import com.orangehrmlive.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class PimPage extends Utility {

    private static final Logger log = LogManager.getLogger(PimPage.class.getName());

    @FindBy(xpath = "//a[@id='menu_pim_addEmployee']")
    WebElement _addEmployeeButton;

    @FindBy(xpath = "//a[@id='menu_pim_viewEmployeeList']")
    WebElement _viewEmployeeList;

    public void clickOnAddEmployeeButton() {
        Reporter.addStepLog("Click on add employee button: "+_addEmployeeButton.toString());
        waitUntilElementToBeClickable(_addEmployeeButton, 20);
        clickOnElement(_addEmployeeButton);
        log.info("Click on add employee button: "+_addEmployeeButton.toString());
    }

    public void clickOnEmployeeListButton(){
        Reporter.addStepLog("Click on add employee button: "+_viewEmployeeList.toString());
        waitUntilElementToBeClickable(_addEmployeeButton, 20);
        clickOnElement(_viewEmployeeList);
        log.info("Click on add employee button: "+_viewEmployeeList.toString());

    }

}
