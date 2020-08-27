package com.howtodoinjava.rest.controller;

import java.awt.AWTException;

import java.awt.Robot;

import java.awt.event.KeyEvent;
 

import java.io.FileNotFoundException;

import java.io.FileOutputStream;

import java.io.IOException;
 

import java.util.Properties;

 

import javax.xml.parsers.ParserConfigurationException;
 

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.CrossOrigin;

 

import org.springframework.web.bind.annotation.PostMapping;

import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RestController;

import org.xml.sax.SAXException;

 

import com.howtodoinjava.rest.dao.CapabilityDAO;
import com.howtodoinjava.rest.model.Capabilities;
import com.howtodoinjava.rest.model.Capability;
import com.howtodoinjava.rest.model.CrossBrowserResult;
import com.howtodoinjava.rest.model.InfoTest;
 
@CrossOrigin(origins = "http://localhost:4200")

@RestController

@RequestMapping(path = "/cap")

public class CapabilityController

{
private GeneratefromXmlObject xmlObject=new GeneratefromXmlObject();
private GenerateFromXmlCBTObject o=new GenerateFromXmlCBTObject();
private CrossBrowserResult CBT;
private InfoTest infotest;
@Autowired
 Capabilities caps;

@Autowired

Capability cap;

@Autowired

CapabilityDAO capDao;

                    static {
                       System.setProperty("java.awt.headless", "false");
                       }
         

  @PostMapping(path= "/", consumes = "application/json", produces = "application/json")

    public InfoTest RunTest( @RequestBody Capability cap) throws  IOException, InterruptedException, ParserConfigurationException, SAXException, AWTException
    {      	 int a=0;
              if(cap.getBrowserName().equalsIgnoreCase("Chrome")) {
            	  a=42000;
               }
              else if(cap.getBrowserName().equalsIgnoreCase("Firefox")) {
            	  a=78000;
               }
              else if(cap.getBrowserName().equalsIgnoreCase("Opera")) {
            	  a=78000;
               }
              else if(cap.getBrowserName().equalsIgnoreCase("Edge")) {
            	  a=78000;
               }
	              writePropertyFile(cap);
	              Thread.sleep(5000);
               // String[] cmd= {"cmd.exe","start","/K","mvn -Dtest=TestScreenshotsUsingAshots test"};
                //Runtime.getRuntime().exec(cmd);
                  Runtime.getRuntime().exec("cmd /c start /B cmd.exe /K mvn -Dtest=TestScreenshotsUsingAshots test");
                  Thread.sleep(a);             
                  ActualizeProject();
                  Thread.sleep(11000);
                  this.infotest=xmlObject.generateInfoTestModel();
                  System.out.println(this.infotest.toString());
                   //CopyScreenshots(infotest.getBase(), infotest.getName(),infotest.getImagePath());
                  return this.infotest;
    } 
  @PostMapping(path= "/re-runtest", consumes = "application/json", produces = "application/json")

  public InfoTest ReRunTest( @RequestBody Capability cap) throws  IOException, InterruptedException, ParserConfigurationException, SAXException, AWTException
  {            int a=0;
  if(cap.getBrowserName().equalsIgnoreCase("Chrome")) {
	  a=42000;
   }
  else if(cap.getBrowserName().equalsIgnoreCase("Firefox")) {
	  a=78000;
   }
  else if(cap.getBrowserName().equalsIgnoreCase("Opera")) {
	  a=73000;
   }
  else if(cap.getBrowserName().equalsIgnoreCase("Edge")) {
	  a=70000;
   }
	           writePropertyFile(cap);
	           Thread.sleep( 5000);
             // String[] cmd= {"cmd.exe","start","/K","mvn -Dtest=TestScreenshotsUsingAshots test"};
              //Runtime.getRuntime().exec(cmd);
                  Runtime.getRuntime().exec("cmd /c start /B cmd.exe /K mvn -Dtest=TestScreenshotsUsingAshots test");
                  Thread.sleep(a);             
                  ActualizeProject();
                  Thread.sleep(9000);
                 this.infotest=xmlObject.generateInfoTestModel();
                 System.out.println(this.infotest.toString());
                 //CopyScreenshots(infotest.getBase(), infotest.getName(),infotest.getImagePath());
                  return this.infotest;
  } 
  @PostMapping(path= "/cross-browser-test", consumes = "application/json", produces = "application/json")

  public CrossBrowserResult crossbrowserTest( @RequestBody Capability caps) throws  IOException, InterruptedException, ParserConfigurationException, SAXException, AWTException
  {        
	           writePropertyFile(caps);
	           Thread.sleep( 5000);
                  Runtime.getRuntime().exec("cmd /c start cmd.exe /K mvn test -DdefaultSuiteFiles=\"testng.xml,\"");
                  System.out.println("wait until test complete");
                  Thread.sleep(190000);   
                  System.out.println("sleep 190000");
                  ActualizeProject();
                  System.out.println("Actualize project");
                  Thread.sleep(10000);
                  this.CBT= o.generateCBTModel();
                 System.out.println(this.CBT.toString());
                 //CopyScreenshots(infotest.getBase(), infotest.getName(),infotest.getImagePath());
                  return this.CBT;
  } 
  public void writePropertyFileCaps(Capabilities c) throws FileNotFoundException, IOException
  {

     System.out.println("============= write Property file ==============");
      //Creating properties files from Java program
      FileOutputStream fos = new FileOutputStream("C:/Users/GOUAIED/OneDrive/Bureau/springbootrestdemo/springbootrestdemo1/src/main/resources/caps.properties");
      Properties props = new Properties();
      props.setProperty("caps.url", c.getUrl());
      props.setProperty("caps.op", Boolean.toString(c.isOp()));
      props.setProperty("caps.ch", Boolean.toString(c.isCh()));
      props.setProperty("caps.fire", Boolean.toString(c.isFire()));
      props.setProperty("caps.ie", Boolean.toString(c.isIe()));
      props.setProperty("caps.edge", Boolean.toString(c.isEdge()));
      props.setProperty("caps.w", Integer.toString(c.getW()));
      props.setProperty("caps.h", Integer.toString(c.getH()));
      //writing properites into properties file from Java
      props.store(fos, null);
      fos.close();
  }
    public void writePropertyFile(Capability c) throws FileNotFoundException, IOException
    {
 
       System.out.println("============= write Property file ==============");
        //Creating properties files from Java program
        FileOutputStream fos = new FileOutputStream("C:/Users/GOUAIED/OneDrive/Bureau/springbootrestdemo/springbootrestdemo1/src/main/resources/test.properties");
        Properties props = new Properties();
        props.setProperty("cap.url", c.getUrl());
        props.setProperty("cap.browserName", c.getBrowserName());
        props.setProperty("cap.width", Integer.toString(c.getWidth()));
        props.setProperty("cap.height", Integer.toString(c.getHeight()));
        //writing properites into properties file from Java
        props.store(fos, null);
        fos.close();
    }

 

   public void ActualizeProject() {
                 Robot robot;

                try {
                   robot = new Robot();
                   robot.keyPress(KeyEvent.VK_ALT);
                   robot.keyPress(KeyEvent.VK_F5);
                   robot.keyRelease(KeyEvent.VK_F5);
                   robot.keyRelease(KeyEvent.VK_ALT);
                   robot.keyPress(KeyEvent.VK_ENTER);
                     }  
                catch (AWTException e) {
                                         System.out.println("Robot Exception");
                                          e.printStackTrace();
                               }

                              

    }
}


 