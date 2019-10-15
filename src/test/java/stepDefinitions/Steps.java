package stepDefinitions;

import io.cucumber.java.en.*;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;



public class Steps {

    WebDriver driver;

    @Given( "I launch chrome browser" )
    public void i_launch_chrome_browser( ) {
        System.setProperty( "webdriver.chrome.driver" , "F:\\Drivers\\chromedriver.exe" );
        driver = new ChromeDriver( );

    }

    @When( "I open orange hrm home page" )
    public void openURL( ) {
        driver.get( "https://opensource-demo.orangehrmlive.com/" );
        driver.manage( ).window( ).maximize( );
    }

    @Then( "I verify that the logo present on the page" )
    public void verifyLogo( ) {
        boolean status = driver.findElement( By.xpath( "//*[@id=\"divLogo\"]/img" ) ).isDisplayed( );
        Assert.assertEquals( true , status );

    }

    @Then( "close browser" )
    public void closeBrowser( ) {

        driver.close( );
    }

    @When( "Enter username and password" )
    public void enterCredentials( ) {
        driver.findElement( By.id( "txtUsername" ) ).sendKeys( "Admin" );
        driver.findElement( By.id( "txtPassword" ) ).sendKeys( "admin123" );
    }


    @When( "Click on Login button" )
    public void clickLogin( ) {
        driver.findElement( By.id( "btnLogin" ) ).click( );

    }

    @When( "User must successfully login to the Dashboard Page" )
    public void dashBoardPage( ) {
        String text = driver.findElement( By.xpath( "//*[@id=\"content\"]/div/div[1]/h1" ) ).getText( );
        Assert.assertEquals( "Dashboard" , text );

    }

    @When( "Enter username {string} and password {string}" )
    public void loginWithParam( String uname , String pwd ) {
        driver.findElement( By.id( "txtUsername" ) ).sendKeys( uname );
        driver.findElement( By.id( "txtPassword" ) ).sendKeys( pwd );

    }

}
