package com.demo.nopcommerce.cucumber.stepdefs;

import com.demo.nopcommerce.pages.BookPage;
import com.demo.nopcommerce.pages.HomePage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class BookSteps {

    @When("^I click on Book Link$")
    public void iClickOnBookLink() {
        new HomePage().clickOnBooksLink();
    }

    @Then("^I should navigate to Book page successfully$")
    public void iShouldNavigateToBookPageSuccessfully() {
        new BookPage().verifyBooksPageText("Books");
    }

    @And("^I sort books by Name: A to Z$")
    public void iSortBooksByNameAToZ() {
        new BookPage().clickOnSortByAtoZ();
    }

    @Then("^I should see the products displayed on the books page sorted by alphabetic order$")
    public void iShouldSeeTheProductsDisplayedOnTheBooksPageSortedByAlphabeticOrder() {
        new BookPage().verifySortByAtoZ();
    }

    @And("^I sort books by Price: Low to High$")
    public void iSortBooksByPriceLowToHigh() {
        new BookPage().clickOnSortByLowToHigh();
    }

    @Then("^I should see the products displayed on the books page sorted by prices in ascending order$")
    public void iShouldSeeTheProductsDisplayedOnTheBooksPageSortedByPricesInAscendingOrder() {
        new BookPage().verifySortByLowToHigh();
    }

}
