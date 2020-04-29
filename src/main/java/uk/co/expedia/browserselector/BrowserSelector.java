package uk.co.expedia.browserselector;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.opera.OperaDriver;
import uk.co.expedia.basepage.BasePage;

public class BrowserSelector extends BasePage{

    private static final Logger log = LogManager.getLogger(BrowserSelector.class.getName());

    String projectPath = System.getProperty("user.dir");

    public void selectBrowser(String browser) {
        if (browser.equalsIgnoreCase("chrome")) {
            System.setProperty("webdriver.chrome.driver", projectPath + "/drivers/chromedriver.exe");
            driver = new ChromeDriver();
            log.info("Chrome Browser Selected");
        } else if (browser.equalsIgnoreCase("firefox")) {
            System.setProperty("webdriver.gecko.driver", projectPath + "/drivers/geckodriver.exe");
            driver = new FirefoxDriver();
            log.info("Firefox Browser Selected");
        } else if (browser.equalsIgnoreCase("opera")) {
            System.setProperty("webdriver.opera.driver", projectPath + "/drivers/operadriver.exe");
            driver = new OperaDriver();
            log.info("Opera Browser Selected");
        } else if (browser.equalsIgnoreCase("ie")) {
            System.setProperty("webdriver.ie.driver", projectPath + "/drivers/IEDriverServer.exe");
            driver = new InternetExplorerDriver();
            log.info("IE Browser Selected");
        } else {
            System.out.println("Wrong Browser Selected");
            log.info("Wrong Browser Selected");
        }
    }

}

