package com.demo.nopcommerce.pages;

import com.cucumber.listener.Reporter;
import com.demo.nopcommerce.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class RegisterPage extends Utility {

    private static final Logger log = LogManager.getLogger(RegisterPage.class.getName());

    @FindBy(xpath = "//div[@class='page-body']//strong[text()='Your Personal Details']")
    WebElement _textYourPersonalDetails;

    @FindBy(xpath = "//input[@id='gender-male']")
    WebElement _maleGenderRadioBtn;

    @FindBy(xpath = "//input[@id='gender-female']")
    WebElement _femaleGenderRadioBtn;

    @FindBy(xpath = "//input[@id='FirstName']")
    WebElement _firstNameField;

    @FindBy(xpath = "//input[@id='LastName']")
    WebElement _lastNameField;

    @FindBy(xpath = "//select[@name='DateOfBirthDay']")
    WebElement _dayDOB;

    @FindBy(xpath = "//select[@name='DateOfBirthMonth']")
    WebElement _monthDOB;

    @FindBy(xpath = "//select[@name='DateOfBirthYear']")
    WebElement _yearDOB;

    @FindBy(xpath = "//input[@id='Email']")
    WebElement _emailField;

    @FindBy(xpath = "//input[@id='Company']")
    WebElement _companyNameField;

    @FindBy(css = "input#Newsletter")
    WebElement _newsletterCheckBox;

    @FindBy(xpath = "//input[@id='Password']")
    WebElement _passwordField;

    @FindBy(xpath = "//input[@id='ConfirmPassword']")
    WebElement _confirmPasswordField;

    @FindBy(xpath = "//input[@id='register-button']")
    WebElement _registerBtn;

    @FindBy(xpath = "//span[@class='field-validation-error']")
    WebElement _requiredFieldErrorText;


    public void verifyTextYourPersonalDetails(String txt) {
        Reporter.addStepLog(" Verify Text: " + txt + " is displayed on the Registeration Page" + _textYourPersonalDetails.toString());
        verifyTextAssertMethod(_textYourPersonalDetails, txt);
        log.info(" Verify Text: " + txt + " is displayed on the Registeration Page" + _textYourPersonalDetails.toString());
    }

    public void selectMaleGenderRadioBtn() {
        Reporter.addStepLog(" Select Gender Male " + _maleGenderRadioBtn.toString());
        waitUntilElementToBeClickable(_maleGenderRadioBtn, 20);
        radioButtonClick(_maleGenderRadioBtn);
        log.info(" Select Gender Male " + _maleGenderRadioBtn.toString());
    }

    public void selectFemaleGenderRadioBtn() {
        Reporter.addStepLog(" Select Gender Female " + _femaleGenderRadioBtn.toString());
        waitUntilElementToBeClickable(_femaleGenderRadioBtn, 20);
        radioButtonClick(_femaleGenderRadioBtn);
        log.info(" Select Gender Female " + _femaleGenderRadioBtn.toString());
    }

    public void sendTextToFirstNameField(String fName) {
        Reporter.addStepLog(" Send text: " + fName + " to First Name field " + _firstNameField.toString());
        waitUntilElementToBeClickable(_firstNameField, 20);
        sendTextToElement(_firstNameField, fName);
        log.info(" Send text: " + fName + " to First Name field " + _firstNameField.toString());
    }

    public void sendTextToLastNameField(String lName) {
        Reporter.addStepLog(" Send text: " + lName + " to Last Name field " + _lastNameField.toString());
        waitUntilElementToBeClickable(_lastNameField, 20);
        sendTextToElement(_lastNameField, lName);
        log.info(" Send text: " + lName + " to Last Name field " + _lastNameField.toString());
    }

    public void selectDayDOBFromDropDownMenu(String date) {
        Reporter.addStepLog(" Select date of DOB from the drop down menu: " + _dayDOB.toString());
        waitUntilElementToBeClickable(_dayDOB, 20);
        selectByVisibleTextFromDropDown(_dayDOB, date);
        log.info(" Select date of DOB from the drop down menu: " + _dayDOB.toString());
    }

    public void selectMonthDOBFromDropDownMenu(String mnth) {
        Reporter.addStepLog(" Select month of DOB from the drop down menu:" + _monthDOB.toString());
        waitUntilElementToBeClickable(_monthDOB, 20);
        selectByVisibleTextFromDropDown(_monthDOB, mnth);
        log.info(" Select month of DOB from the drop down menu:" + _monthDOB.toString());
    }

    public void selectYearDOBFromDropDownMenu(String yr) {
        Reporter.addStepLog(" Select year of DOB from drop down menu:" + _yearDOB.toString());
        waitUntilElementToBeClickable(_yearDOB, 20);
        selectByVisibleTextFromDropDown(_yearDOB, yr);
        log.info(" Select year of DOB from drop down menu:" + _yearDOB.toString());
    }

    public void sendTextToEmailField(String emailId) {
        Reporter.addStepLog(" Send text: " + emailId + " to email field " + _emailField.toString());
        waitUntilElementToBeClickable(_emailField, 20);
        sendTextToElement(_emailField, emailId);
        log.info(" Send text: " + emailId + " to email field " + _emailField.toString());
    }

    public void sendRandomEmailToEmailField() {
        String emailId = "xyz" + getRandomNumber(2) + "@gmail.com";
        Reporter.addStepLog(" Send text: " + emailId + " to email field " + _emailField.toString());
        waitUntilElementToBeClickable(_emailField, 20);
        sendTextToElement(_emailField, emailId);
        log.info(" Send text: " + emailId + " to email field " + _emailField.toString());
    }

    public void sendTextToCompanyNameField(String coName) {
        Reporter.addStepLog(" Send text: " + coName + " to company name field " + _companyNameField.toString());
        waitUntilElementToBeClickable(_companyNameField, 20);
        sendTextToElement(_companyNameField, coName);
        log.info(" Send text: " + coName + " to company name field " + _companyNameField.toString());
    }

    public void selectNewsLetterCheckBox() {
        Reporter.addStepLog(" Check if newsletter checkbox ticked " + _newsletterCheckBox.toString());
        waitUntilElementToBeClickable(_newsletterCheckBox, 20);
        elementIsSelected(_newsletterCheckBox);
        log.info(" Check if newsletter checkbox ticked " + _newsletterCheckBox.toString());
    }

    public void sendTextToPasswordField(String pwd) {
        Reporter.addStepLog(" Send text: " + pwd + " to password field " + _passwordField.toString());
        waitUntilElementToBeClickable(_passwordField, 20);
        sendTextToElement(_passwordField, pwd);
        log.info(" Send text: " + pwd + " to password field " + _passwordField.toString());
    }

    public void sendTextToConfirmPasswordField(String coPwd) {
        Reporter.addStepLog(" Send text: " + coPwd + " to confirm password field " + _confirmPasswordField.toString());
        waitUntilElementToBeClickable(_confirmPasswordField, 20);
        sendTextToElement(_confirmPasswordField, coPwd);
        log.info(" Send text: " + coPwd + " to confirm password field " + _confirmPasswordField.toString());
    }

    public void clickOnRegisterButton() {
        Reporter.addStepLog(" Click on Register button " + _registerBtn.toString());
        waitUntilElementToBeClickable(_registerBtn, 20);
        clickOnElement(_registerBtn);
        log.info(" Click on Register button " + _registerBtn.toString());
    }

    public void verifyRequiredFieldErrorText(String errMsg) {
        Reporter.addStepLog("Verify text: " + errMsg + " when * marked mandatory fields are left empty " + _requiredFieldErrorText.toString());
        waitUntilElementToBeClickable(_requiredFieldErrorText, 20);
        verifyTextAssertMethod(_requiredFieldErrorText, errMsg);
        log.info("Verify text: " + errMsg + " when * marked mandatory fields are left empty " + _requiredFieldErrorText.toString());
    }

}
