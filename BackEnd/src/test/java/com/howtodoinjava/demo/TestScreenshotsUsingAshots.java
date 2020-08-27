 package com.howtodoinjava.demo;
import java.awt.AWTException;
import java.io.File;
 
import java.io.IOException;
 
import org.openqa.selenium.Dimension;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
 
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;
 
import org.openqa.selenium.opera.OperaDriver;


import io.github.bonigarcia.wdm.WebDriverManager;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.testng.AbstractTestNGSpringContextTests;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;
import com.assertthat.selenium_shutterbug.core.Shutterbug;
import com.assertthat.selenium_shutterbug.utils.web.ScrollStrategy;
 
import com.howtodoinjava.rest.model.Capability;
 
 
@ContextConfiguration(classes = Capability.class)
@TestPropertySource("classpath:test.properties")
public class TestScreenshotsUsingAshots extends AbstractTestNGSpringContextTests {

    private  WebDriver driver;                                 
    private String nameScreen;

    private String path="";
    private static String url;
    private static String browser;
    private static int w;
    private static int h;
    private boolean base;

   @Autowired 
    private  Capability cap;

   @BeforeMethod
	  public void beforeTest() {
		   url=this.cap.getUrl();
		   h=this.cap.getHeight();
		   w=this.cap.getWidth();
		   browser=cap.getBrowserName();
	  }
@Test

public  void TestScreenshot() throws IOException, AWTException, InterruptedException, ClassNotFoundException, InstantiationException, IllegalAccessException 
{ 
	   if (browser.equalsIgnoreCase("Chrome")) {
		  
       path="chrome/";
       
        ChromeOptions options = new ChromeOptions();
       options.addArguments("headless");
       System.setProperty("webdriver.chrome.driver","C:/Users/GOUAIED/OneDrive/Bureau/pfe/visual-testing-back/drivers/chrome/chromedriver_win32_84/chromedriver.exe");
       //WebDriverManager.chromedriver().setup();
       driver  = new ChromeDriver(options);
       
     }

else if (browser.equalsIgnoreCase("Firefox")) {
	    path="firefox/";
	    FirefoxOptions options = new FirefoxOptions(); 
	    options.setHeadless(true);
	    System.setProperty("webdriver.gecko.driver","C:/Users/GOUAIED/OneDrive/Bureau/pfe/visual-testing-back/drivers/firefox/geckodriver-V2664.exe");
	    //WebDriverManager.firefoxdriver().setup();
	    driver= new FirefoxDriver(options);
 
      }

else if (browser.equalsIgnoreCase("Edge")) {
        path="edge/";
        System.setProperty("webdriver.edge.driver", "C:/Users/GOUAIED/OneDrive/Bureau/pfe/browsers/msedgedriver1.exe");
        driver= new EdgeDriver();
        
}

else if (browser.equalsIgnoreCase("Opera")) {
	 path="opera/";
	 WebDriverManager.operadriver().setup();
	 driver =new OperaDriver();
}
else {System.out.println("that browser is not supported by our framework ");}
	   	
        driver.get(url);  
        driver.manage().window().setSize(new Dimension(w,h));
        nameScreen = GenerateNameScreen(url);
        VerifPath(nameScreen);
        Shutterbug.shootPage(driver,ScrollStrategy.WHOLE_PAGE).withName(path).save();
        driver.close();
}



public void VerifPath(String nom) throws IOException {

                 System.out.println("--------------GeneratePath-------------");
                 String p="C:/Users/GOUAIED/OneDrive/Bureau/springbootrestdemo/springbootrestdemo1/screenshots/"+path+"imageBaseline/"+nom+".png";
                 File file=new File(p);
                 System.out.println(file.exists()); 
 
  if(file.exists()) {

                  this.base=false;

                  path=path+"imageCheckpoint/"+nom;

  }

  else {

                  this.base=true;

                  path=path+"imageBaseline/"+nom;

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

                                               screenname= name.substring(0, pos)+Integer.toString(cap.getWidth())+"x"+Integer.toString(cap.getHeight());

                               }

                               else

                               {

                                               String name=url.substring(8);

                                               //System.out.println(name);

                                               int pos= name.indexOf(".");

                                               screenname= name.substring(0, pos)+Integer.toString(cap.getWidth())+"x"+Integer.toString(cap.getHeight());

                               }

                }

                else if (url.contains("http://")) {

                               if(url.contains("www.")) {

                                               String name=url.substring(11);

                                               //System.out.println(name);

                                               int pos= name.indexOf(".");

                                               screenname= name.substring(0, pos)+Integer.toString(cap.getWidth())+"x"+Integer.toString(cap.getHeight());

                               }

     else if(url.contains("localhost")) {

                String name=url.substring(7);

                int pos=name.indexOf(":");

                               screenname= name.substring(0, pos)+Integer.toString(cap.getWidth())+"x"+Integer.toString(cap.getHeight());

                               }

                               else

                               {

                                               String name=url.substring(7);

                                               //System.out.println(name);

                                               int pos= name.indexOf(".");

                                               screenname= name.substring(0, pos)+Integer.toString(cap.getWidth())+"x"+Integer.toString(cap.getHeight());

                               }

                              

                              

                }

                else {System.out.println("incorrect url");}

                return screenname;

}

@AfterClass

public void shootDown() throws IOException {

               

                ExtractXMLData.XmlFile( path,nameScreen,base);

}

               

 

}
