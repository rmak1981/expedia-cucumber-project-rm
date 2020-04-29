package com.demo.nopcommerce.cucumber.stepdefs;

import com.demo.nopcommerce.pages.BuildYourOwnComputerPage;
import com.demo.nopcommerce.pages.ComputerPage;
import com.demo.nopcommerce.pages.DesktopPage;
import com.demo.nopcommerce.pages.HomePage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.runner.Computer;

public class ComputerSteps {

    @When("^I click on Computer link$")
    public void iClickOnComputerLink() {
        new HomePage().clickOnComputerLink();
    }

    @Then("^I navigate to Computer page successfully$")
    public void iNavigateToComputerPageSuccessfully() {
        new ComputerPage().verifyComputerPageText("Computers");
    }

    @And("^I click on Desktop link$")
    public void iClickOnDesktopLink() {
        new ComputerPage().clickOnDesktopsLink();
    }

    @And("^I select build your own computer$")
    public void iSelectBuildYourOwnComputer() {
        new DesktopPage().clickOnBuildYourOwnComputer();
    }

    @And("^I select HDD$")
    public void iSelectHDD() {
        new BuildYourOwnComputerPage().clickOnHDD400GBRadioButton();
    }


    @And("^I click on add to cart$")
    public void iClickOnAddToCart() {
        new BuildYourOwnComputerPage().clickOnAddToCartBtn();
    }

    @Then("^The product is added successfully$")
    public void theProductIsAddedSuccessfully() {
        new BuildYourOwnComputerPage().verifyTextProductAddedToShoppingCart("The product has been added to your shopping cart");
    }

}
