package com.howtodoinjava.demo;



import org.openqa.selenium.Dimension;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;
import org.openqa.selenium.opera.OperaDriver;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.testng.AbstractTestNGSpringContextTests;

import org.testng.annotations.BeforeMethod;

import org.testng.annotations.Parameters;
import org.testng.annotations.Test;

import com.assertthat.selenium_shutterbug.core.Shutterbug;
import com.assertthat.selenium_shutterbug.utils.web.ScrollStrategy;
import com.howtodoinjava.rest.model.Capability;
import io.github.bonigarcia.wdm.WebDriverManager;


@ContextConfiguration(classes = Capability.class)
@TestPropertySource("classpath:test.properties")
public class CrossBrowserTesting extends AbstractTestNGSpringContextTests{
	public WebDriver driver;
	private String nameScreen;
	private String path="crossbrowser/";
	private String URL; 
	private int w;
	private int h;
	
	  @Autowired 
	    private  Capability cap;

	   @BeforeMethod
		  public void beforeTest() {
			   URL=this.cap.getUrl();
			   h=this.cap.getHeight();
			   w=this.cap.getWidth();
               nameScreen = GenerateNameScreen(URL);
               System.out.println(URL + h+w+nameScreen);
    }
	
	@Test
	@Parameters("Browser")
	public void test1(String browser) {

	if(browser.equalsIgnoreCase("firefox")){
		path+="firefox/";
		path=path+nameScreen;
		FirefoxOptions options = new FirefoxOptions(); 
		options.setHeadless(true);
		//WebDriverManager.firefoxdriver().setup();
		System.setProperty("webdriver.gecko.driver","C:/Users/GOUAIED/OneDrive/Bureau/pfe/visual-testing-back/drivers/firefox/geckodriver-V2664.exe");
	   WebDriver driver=new FirefoxDriver(options);
	  driver.manage().window().setSize(new Dimension(w,h));
	  driver.get(URL);
      Shutterbug.shootPage(driver,ScrollStrategy.WHOLE_PAGE,500,true).withName(path).save();
	  driver.quit();

	}
	else if(browser.equalsIgnoreCase("chrome")){   
		path+="chrome/"; 
		path=path+nameScreen;
	ChromeOptions options = new ChromeOptions();
	options.addArguments("headless");
	WebDriverManager.chromedriver().setup();
	 //System.setProperty("webdriver.chrome.driver","C:/Users/GOUAIED/OneDrive/Bureau/pfe/visual-testing-back/drivers/chrome/chromedriver_win32_84/chromedriver.exe");     
	WebDriver driver  = new ChromeDriver(options);
	driver.manage().window().setSize(new Dimension(w,h));
	driver.get(URL);
    Shutterbug.shootPage(driver,ScrollStrategy.WHOLE_PAGE,500,true).withName(path).save();
	driver.close();
	}

	else if(browser.equalsIgnoreCase("edge")){   
		  path+="edge/";
		  path=path+nameScreen;
	 //WebDriverManager.edgedriver().setup();
	 System.setProperty("webdriver.edge.driver", "C:/Users/GOUAIED/OneDrive/Bureau/pfe/browsers/msedgedriver1.exe");
	 WebDriver driver= new EdgeDriver();
	  driver.manage().window().setSize(new Dimension(w,h));
	  driver.get(URL);
      Shutterbug.shootPage(driver,ScrollStrategy.WHOLE_PAGE,500,true).withName(path).save();
	driver.close();
	}
	else if(browser.equalsIgnoreCase("opera")){   
	 path+="opera/";
	 path=path+nameScreen;
	 WebDriverManager.operadriver().setup();
	 WebDriver driver =new OperaDriver();
	 driver.manage().window().setSize(new Dimension(w,h));
	driver.get(URL);
    Shutterbug.shootPage(driver,ScrollStrategy.WHOLE_PAGE,500,true).withName(path).save();
	driver.quit();
	}
	}

public String GenerateNameScreen(String url) {

       //System.out.println("---------------GenrateNameScreen---------------");

       String screenname="";

       if(url.contains("https://")) {

                      if(url.contains("www.")) {

                                      String name=url.substring(12);

                                      //System.out.println(name);

                                      int pos= name.indexOf(".");

                                      screenname= name.substring(0, pos)+Integer.toString(w)+"x"+Integer.toString(h);

                      }

                      else

                      {

                                      String name=url.substring(8);

                                      //System.out.println(name);

                                      int pos= name.indexOf(".");

                                      screenname= name.substring(0, pos)+Integer.toString(w)+"x"+Integer.toString(h);

                      }

       }

       else if (url.contains("http://")) {

                      if(url.contains("www.")) {

                                      String name=url.substring(11);

                                      //System.out.println(name);

                                      int pos= name.indexOf(".");

                                      screenname= name.substring(0, pos)+Integer.toString(w)+"x"+Integer.toString(h);

                      }

else if(url.contains("localhost")) {

       String name=url.substring(7);

       int pos=name.indexOf(":");

       screenname= name.substring(0, pos)+Integer.toString(w)+"x"+Integer.toString(h);

                      }

                      else

                    	  
                      {

                                      String name=url.substring(7);

                                      //System.out.println(name);

                                      int pos= name.indexOf(".");

                                      screenname= name.substring(0, pos)+Integer.toString(w)+"x"+Integer.toString(h);
                      }

                     

                     

       }

       else {System.out.println("incorrect url");}

       return screenname;

}

}
