package com.howtodoinjava.rest.controller;
import java.awt.AWTException;
import java.awt.Robot;
import java.awt.event.KeyEvent;
import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import org.im4java.core.IM4JavaException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.howtodoinjava.rest.model.Cap;
import com.howtodoinjava.rest.model.Images;
import com.howtodoinjava.rest.model.ImagesList;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(path = "/images")
public class ControllerCompareImages {
	@Autowired
	Cap cap;
	@Autowired
	Images images;
	@Autowired
	ImagesList list;

 static {

	 System.setProperty("java.awt.headless", "false");
	   }

@PostMapping(path= "/compare", consumes = "application/json", produces = "application/json")
public String DetectDifferences(@RequestBody Images img) throws InterruptedException, IOException, IM4JavaException {
    String image1=img.getPathBaseline();
    String image2=img.getPathCheckpoint();
    int w=img.getW();
    int h= img.getH();
    String p="cmd /C start /B cmd.exe /K python src/main/resources/compare.py --first "+image1+" --second "+image2+" --w "+w+" --h "+h;
	Runtime.getRuntime().exec(p);
	System.out.println("khraaaaaaa");
	/*String path="C:/Users/GOUAIED/OneDrive/Bureau/springbootrestdemo/springbootrestdemo1/screenshots/compare/diff.png";
	boolean b=Compare(image1,image2,path,img.getW(),img.getH());
	System.out.println("la comparaison passed "+b);*/
	Thread.sleep(20000);
	return "http://127.0.0.1:8887/compare/diff.png";
}
@PostMapping(path= "/allImages/", consumes = "application/json", produces = "application/json")
public String[] GiveAllImageRecc(@RequestBody Cap cap)
{
	String name=cap.getName();
	String[] list=new String[4];
	System.out.println("create the image list: ");
    List<String> browsers= new ArrayList<String>();
	System.out.println("create the browsers list: ");
    browsers.add("Chrome");
    browsers.add("Firefox"); 
    browsers.add("Edge");
    browsers.add("Opera");
    for(int i=0; i<browsers.size();i++)
    {
        String path="C:/Users/GOUAIED/OneDrive/Bureau/springbootrestdemo/springbootrestdemo1/screenshots/"+browsers.get(i)+"/imageBaseline/"+name+".png";
        File f=new File(path);
        String p="http://127.0.0.1:8887/"+browsers.get(i)+"/imageBaseline/"+name+".png";
        if(f.exists()) {list[i]=p;
        System.out.println("yes");}
        else {System.out.println("no");}
   }
    for(int i=0;i<list.length;i++) {
    	System.out.println(list[i]);
    }
	return list;
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
	} catch (AWTException e) {
		System.out.println("Robot Exception");
		e.printStackTrace();
	} 
		
}
}