package uk.co.expedia.cucumber;

import com.cucumber.listener.Reporter;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import uk.co.expedia.basepage.BasePage;
import uk.co.expedia.browserselector.BrowserSelector;
import uk.co.expedia.loadproperty.LoadProperty;
import uk.co.expedia.utility.Utility;

import java.io.IOException;
import java.util.concurrent.TimeUnit;

public class Hooks extends BasePage {

    BrowserSelector browserSelector = new BrowserSelector();
    LoadProperty loadProperty = new LoadProperty();

    String baseUrl = loadProperty.getProperty("baseUrl");

    String browser = loadProperty.getProperty("browser");

    //Annotation from cucumber.api.java //if selected from junit will get null pointer exception
    @Before
    public void openBrowser() {
        browserSelector.selectBrowser(browser);
        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        driver.get(baseUrl);
        //inserts Author into the Extent report
        Reporter.assignAuthor("Prime Testing", "Batch 3");
    }

    //Annotation from cucumber.api.java //if selected from junit will get null pointer exception
    //if Scenario is failing to take screenshot adding parameter as Scenario from cucumber
    @After
    public void tearDown(Scenario scenario) {
        if (scenario.isFailed()) {
            //declaring variable for screenShotPath & getting method from utility, replacing spaces" " in Scenario with "_"
            String screenShotPath = Utility.getScreenshot(driver, scenario.getName().replace(" ", "_"));
            try {
                Reporter.addScreenCaptureFromPath(screenShotPath);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }

        driver.quit();
    }

}
