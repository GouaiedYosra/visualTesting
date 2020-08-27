package com.howtodoinjava.demo;


import org.testng.annotations.Test;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import java.net.MalformedURLException;
import java.net.URL;
import org.openqa.selenium.*;		
 
public class Form {	
    
    @Test
    public void mailTest() throws MalformedURLException {
        DesiredCapabilities dr=null;
        System.setProperty("webdriver.chrome.driver","C:/Users/GOUAIED/OneDrive/Bureau/pfe/visual-testing-back/drivers/chrome/chromedriver_win32_84/chromedriver.exe");
        dr=DesiredCapabilities.chrome();
        dr.setBrowserName("chrome");
        dr.setVersion("84.0.4147.89");
        dr.setPlatform(Platform.WINDOWS);
        RemoteWebDriver driver=new RemoteWebDriver(new URL("http://192.168.1.11:4444/wd/hub"), dr);
        driver.navigate().to("http://gmail.com");
        driver.findElement(By.xpath("//input[@id='Email']")) .sendKeys("username");
        driver.findElement(By.xpath("//input[@id='Passwd']")) .sendKeys("password");
        driver.close();
}
}