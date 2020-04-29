package uk.co.expedia.pages;

import com.cucumber.listener.Reporter;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import uk.co.expedia.utility.Utility;

public class FlightSearchPage extends Utility {

    private static final Logger log = LogManager.getLogger(FlightSearchPage.class.getName());

    @FindBy(id = "flight-origin-hp-flight")
    WebElement _flyingFrom;

    @FindBy(id = "flight-destination-hp-flight")
    WebElement _goingTo;

    @FindBy(id = "flight-departing-hp-flight")
    WebElement _departingDate;

    @FindBy(id = "flight-returning-hp-flight")
    WebElement _returningDate;

    @FindBy(xpath = "//div[@id='traveler-selector-hp-flight']//li/button")
    WebElement _travellersField;

    @FindBy(xpath = "//*[@id='traveler-selector-hp-flight']/div/ul/li/div/div/div/div/div[4]/button[1]/span[1]//*[local-name()='svg']")
    WebElement _addAdultTravellers;

    @FindBy(xpath = "//fieldset//div[2]//div[1]//div[4]//button[1]//span[1]//*[local-name()='svg']")
    WebElement _childrenTravellersAdd;

    @FindBy(css = "select[class$='gcw-child-age-1-1-sa']")
    WebElement _childAgeDropDown;

    @FindBy(xpath = "//form[@id='gcw-flights-form-hp-flight']//div//label//button")
    WebElement _searchBtn;

    @FindBy(css = "h1.wizard-tabs")
    WebElement _welcomeText;

    public void sendTextToFlyingFrom(String flyFrm) {
        Reporter.addStepLog(" Enter flying from: " + flyFrm + " in the flying from field " + _flyingFrom.toString());
        sendTextToElement(_flyingFrom, flyFrm);
        log.info(" Enter flying from: " + flyFrm + " in the flying from field " + _flyingFrom.toString());
    }

    public void sendTextToGoingTo(String goTo) {
        Reporter.addStepLog(" Enter going to: " + goTo + " in the going to field " + _goingTo.toString());
        sendTextToElement(_goingTo, goTo);
        log.info(" Enter going to: " + goTo + " in the going to field " + _goingTo.toString());
    }

    public void sendTextToDepartingDate(String departDate) {
        Reporter.addStepLog(" Enter departure date: " + departDate + " in the departure field " + _departingDate.toString());
        sendTextToElement(_departingDate, departDate);
        log.info(" Enter departure date: " + departDate + " in the departure field " + _departingDate.toString());
    }

    public void sendTextToReturningDate(String returnDate) {
        Reporter.addStepLog(" Enter returning date " + returnDate + " in the returning date field " + _returningDate.toString());
        getElement(_returningDate).sendKeys(Keys.CONTROL, "a");
        getElement(_returningDate).sendKeys(Keys.DELETE);

        sendTextToElement(_returningDate, returnDate);

        log.info(" Enter returning date " + returnDate + " in the returning date field " + _returningDate.toString());
    }

    public void clickOnTravellerField() {
        Reporter.addStepLog("Click on travellers field " + _travellersField.toString());
        clickOnElement(_travellersField);
        log.info("Click on travellers field " + _travellersField.toString());
    }

    public void addAdultTravellers() {
        Reporter.addStepLog("Add adult traveller: " + _addAdultTravellers.toString());
        clickOnElement(_addAdultTravellers);
        log.info("Add adult traveller: " + _addAdultTravellers.toString());
    }

    public void addChildrenTraveller() {
        Reporter.addStepLog("Click on add children travellers: " + _childrenTravellersAdd.toString());
        clickOnElement(_childrenTravellersAdd);
        log.info("Click on add children travellers: " + _childrenTravellersAdd.toString());
    }

    public void selectChildrenAge(String age) {
        Reporter.addStepLog("Select childrens age: " + _childAgeDropDown.toString());
        sendTextToElement(_childAgeDropDown, age);
        log.info("Select childrens age: " + _childAgeDropDown.toString());
    }

    public void clickOnSearchBtn() {
        Reporter.addStepLog(" Click on search button " + _searchBtn.toString());
        waitUntilElementToBeClickable(_searchBtn, 20);
        clickOnElement(_searchBtn);
        log.info(" Click on search button " + _searchBtn.toString());
    }

    public void verifySearchFlightsText(String fltTxt) {
        Reporter.addStepLog(" Verify text: " + fltTxt + " is displayed on search flights page " + _welcomeText.toString());
        verifyTextAssertMethod(_welcomeText, fltTxt);
        log.info(" Verify text: " + fltTxt + " is displayed on search flights page " + _welcomeText.toString());
    }

}
