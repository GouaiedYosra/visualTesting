package com.howtodoinjava.rest.controller;

import java.awt.AWTException;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;

import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;
import org.xml.sax.SAXException;

import com.howtodoinjava.rest.model.CrossBrowserResult;

public class GenerateFromXmlCBTObject {
  private CrossBrowserResult CBTObject= new CrossBrowserResult();
  public CrossBrowserResult generateCBTModel()throws ParserConfigurationException,SAXException,IOException, AWTException, InterruptedException

  {
	  File resultTest= new File("C:/Users/GOUAIED/OneDrive/Bureau/springbootrestdemo/springbootrestdemo1/test-output/testng-results.xml");
	  generate(resultTest);
	  InputStream input = new FileInputStream("C:/Users/GOUAIED/OneDrive/Bureau/springbootrestdemo/springbootrestdemo1/src/main/resources/test.properties") ;
      Properties prop = new Properties();
      prop.load(input);

  
                     CBTObject.setUrl(prop.getProperty("cap.url"));
                     String re= String.valueOf(prop.getProperty("cap.width"))+" * "+String.valueOf(prop.getProperty("cap.height"));
                     CBTObject.setResolution(re);
                    return CBTObject;



  }
  public void generate(File file) throws ParserConfigurationException, SAXException, IOException {
	  
     Element Suite;
     final DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();

     final DocumentBuilder builder = factory.newDocumentBuilder();                          

     final Document document= builder.parse(file);

     final Element racine = document.getDocumentElement();
     System.out.println("racine: "+racine.getNodeName());

     final NodeList racineNoeuds = racine.getChildNodes();

    int i=1;

	 while((racineNoeuds.item(i).getNodeName()!= "suite")&& (racineNoeuds.getLength()>i))
	
	 {
		 System.out.println(racineNoeuds.item(i).getNodeName());
		 System.out.println(i);
	      i++;
	 }
		final Node suit=racineNoeuds.item(i);
		System.out.println("after while "+suit.getNodeName());
		if(suit.getNodeType() == Node.ELEMENT_NODE) {
		Suite=(Element)suit;
		this.CBTObject.setExecutionTime(Integer.parseInt(Suite.getAttribute("duration-ms")));
		this.CBTObject.setStartedAt(Suite.getAttribute("started-at"));
		this.CBTObject.setFinishedAt(Suite.getAttribute("finished-at"));
		System.out.println(this.CBTObject.getExecutionTime()+ this.CBTObject.getStartedAt()+this.CBTObject.getFinishedAt());
		final NodeList tests=Suite.getChildNodes();
		int j=0;
		while(tests.getLength()>j) {
			Node test=tests.item(j);
			System.out.println("tests: "+test.getNodeName());
			if(test.getNodeType() == Node.ELEMENT_NODE) {
				Element t=(Element) test;
				if(t.getAttribute("name").equalsIgnoreCase("Test1")) {
					this.CBTObject.setChrome(Integer.parseInt(t.getAttribute("duration-ms")));			
				}
				else if(t.getAttribute("name").equalsIgnoreCase("Test2")) {
					this.CBTObject.setEdge(Integer.parseInt(t.getAttribute("duration-ms")));			
				}
				else if(t.getAttribute("name").equalsIgnoreCase("Test3")) {
					this.CBTObject.setOpera(Integer.parseInt(t.getAttribute("duration-ms")));			
				}
				else if(t.getAttribute("name").equalsIgnoreCase("Test")) {
					this.CBTObject.setFirefox(Integer.parseInt(t.getAttribute("duration-ms")));			
				}
			}
			j++;
		}
		  }
		else {System.out.println("le node recontre un plm");}

}
}
