package com.demo.nopcommerce.pages;

import com.cucumber.listener.Reporter;
import com.demo.nopcommerce.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.Select;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class BookPage extends Utility {

    private static final Logger log = LogManager.getLogger(BookPage.class.getName());


    @FindBy(css = "select#products-orderby")
    WebElement _positionDropDownMenu;

    @FindBy(xpath = "//div[@class='product-grid']//h2/a")
    WebElement _sortAtoZResults;

    @FindBy(xpath = "//span[@class='price actual-price']")
    WebElement _sortLowToHighResults;

    @FindBy(xpath = "//h1[contains(text(),'Books')]")
    WebElement _booksPageText;

    public void verifyBooksPageText(String pageTxt) {
        Reporter.addStepLog("Verify text: " + pageTxt + " is displayed " + _booksPageText.toString());
        waitUntilElementToBeClickable(_booksPageText, 20);
        verifyTextAssertMethod(_booksPageText, pageTxt);
        log.info("Verify text: " + pageTxt + " is displayed " + _booksPageText.toString());
    }

    public void clickOnSortByAtoZ() {
        Reporter.addStepLog("Select to sort Books by alphabetical order AtoZ from drop down " + _positionDropDownMenu.toString());
        waitUntilElementToBeClickable(_positionDropDownMenu, 20);
        selectByIndexFromDropDown(_positionDropDownMenu, 1);
        log.info("Select to sort Books by alphabetical order AtoZ from drop down " + _positionDropDownMenu.toString());
    }

    public void clickOnSortByLowToHigh() {
        Reporter.addStepLog("Select to sort prices of Books Low to High from drop down " + _positionDropDownMenu.toString());
        waitUntilElementToBeClickable(_positionDropDownMenu, 20);
        selectByIndexFromDropDown(_positionDropDownMenu, 3);
        log.info("Select to sort prices of Books Low to High from drop down " + _positionDropDownMenu.toString());
    }

    public void verifySortByAtoZ() {

//        waitUntilElementToBeClickable(_sortAtoZResults, 20);
//        arrayListForEachLoopAssertEqualsForString((List<WebElement>) _sortAtoZResults);

        List<String> booksNames = new ArrayList<>();

        Select select = new Select(driver.findElement(By.id("products-orderby")));
        select.selectByVisibleText("Name: A to Z");

        List<WebElement> booksList = driver.findElements(By.xpath("//div/div[2]/h2/a"));

        for (WebElement ele : booksList) {
            booksNames.add(ele.getText());
        }

        List<String> tempList = new ArrayList<>();
        tempList.addAll(booksNames);
        System.out.println(tempList);
        Collections.sort(tempList);
        System.out.println(booksNames);
        Assert.assertEquals(booksNames, tempList);

        Reporter.addStepLog("Verify that books: " + booksNames + " are sorted AtoZ " + _sortAtoZResults.toString());
        log.info("Verify that books: " + booksNames + " are sorted AtoZ " + _sortAtoZResults.toString());
    }

    public void verifySortByLowToHigh() {

//        waitUntilElementToBeClickable(_sortLowToHighResults, 20);
//        arrayListForEachLoopAssertEqualsForInt((List<WebElement>) _sortLowToHighResults);

        List<String> booksPrices = new ArrayList<>();

        Select select = new Select(driver.findElement(By.id("products-orderby")));
        select.selectByVisibleText("Price: Low to High");

        List<WebElement> booksList = driver.findElements(By.xpath("//span[@class='price actual-price']"));

        for (WebElement ele : booksList) {
            booksPrices.add(ele.getText());
        }

        List<String> tempList = new ArrayList<>();
        tempList.addAll(booksPrices);
        System.out.println(tempList);
        Collections.sort(tempList);
        System.out.println(booksPrices);
        Assert.assertEquals(booksPrices, tempList);

        Reporter.addStepLog("Verify that books: " + booksPrices + " are sorted Low to High " + _sortLowToHighResults.toString());
        log.info("Verify that books: " + booksPrices + " are sorted Low to High " + _sortLowToHighResults.toString());
    }
}
