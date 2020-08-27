package com.howtodoinjava.demo;
 
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.support.ui.WebDriverWait;

import io.github.bonigarcia.wdm.WebDriverManager;
 

import static org.openqa.selenium.support.ui.ExpectedConditions.elementToBeClickable;
import static org.openqa.selenium.support.ui.ExpectedConditions.presenceOfElementLocated;
import static org.openqa.selenium.support.ui.ExpectedConditions.textToBePresentInElementLocated;

import org.junit.After;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
public class Reruntest {	
    private WebDriver driver;

    @BeforeClass
    public static void setupClass() {
    	System.out.println("before class");
        WebDriverManager.edgedriver().setup();
    }

    @Before
    public void setupTest() {
    	System.out.println("before  ");
        driver = new EdgeDriver();
    }

    @After
    public void teardown() {
        if (driver != null) {
            driver.quit();
        	System.out.println("afer");
        }
    }

    @Test
    public void test() {
        // Your test code here. For example:
    	System.out.println("debut test");
        WebDriverWait wait = new WebDriverWait(driver, 30);
        System.out.println("before get");
        driver.get("https://en.wikipedia.org/wiki/Main_Page");
        By searchInput = By.id("searchInput");
        wait.until(presenceOfElementLocated(searchInput));
        driver.findElement(searchInput).sendKeys("Software");
        By searchButton = By.id("searchButton");
        wait.until(elementToBeClickable(searchButton));
        driver.findElement(searchButton).click();

        wait.until(textToBePresentInElementLocated(By.tagName("body"),
                "Computer software"));
    }



}