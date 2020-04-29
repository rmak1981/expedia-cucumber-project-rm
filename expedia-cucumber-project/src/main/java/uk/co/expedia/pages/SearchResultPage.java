package uk.co.expedia.pages;

import com.cucumber.listener.Reporter;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import uk.co.expedia.utility.Utility;

public class SearchResultPage extends Utility {

    private static final Logger log = LogManager.getLogger(SearchResultPage.class.getName());

    @FindBy(xpath = "//header[@id='titleBar']//span[@class='title-city-text']")
    WebElement _destinationText;

    public void verifyDestinationText(String destTxt) {
        Reporter.addStepLog(" Verify destination diplayed: " + destTxt + " on the search page " + _destinationText.toString());
        verifyTextAssertMethod(_destinationText, destTxt);
        log.info(" Verify destination diplayed: " + destTxt + " on the search page " + _destinationText.toString());
    }

}
