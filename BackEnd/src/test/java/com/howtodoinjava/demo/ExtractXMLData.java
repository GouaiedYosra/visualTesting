package com.howtodoinjava.demo;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;
import javax.xml.transform.OutputKeys;
import javax.xml.transform.Transformer;
import javax.xml.transform.TransformerConfigurationException;
import javax.xml.transform.TransformerException;
import javax.xml.transform.TransformerFactory;
import javax.xml.transform.dom.DOMSource;
import javax.xml.transform.stream.StreamResult;
public class ExtractXMLData {

               public static void XmlFile( String pathScreenshot,String name,boolean s) throws IOException

               {              final File FileReport= new File("C:/Users/GOUAIED/OneDrive/Bureau/springbootrestdemo/springbootrestdemo1/src/main/resources/testngResult.xml");
                              final DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();

                              InputStream input = new FileInputStream("C:/Users/GOUAIED/OneDrive/Bureau/springbootrestdemo/springbootrestdemo1/src/main/resources/test.properties") ;
                              Properties prop = new Properties();
                              prop.load(input);

                              try {
                                         final DocumentBuilder builder = factory.newDocumentBuilder();
                                         final Document document= builder.newDocument();
                                         final Element racine = document.createElement("Test-Report");
                                         document.appendChild(racine);                                          
                                         final Element cap = document.createElement("Capability");
                                              //System.out.println("in ExtractXml Class  to get url from prop file: "+prop.getProperty("cap.url"));

                                                cap.setAttribute("url", prop.getProperty("cap.url"));
                                                cap.setAttribute("browser",prop.getProperty("cap.browserName"));
                                                cap.setAttribute("pathScreenshot", pathScreenshot);
                                                cap.setAttribute("name", name);
                                                cap.setAttribute("base",Boolean.toString(s) );
                                                cap.setAttribute("width",String.valueOf(prop.getProperty("cap.width")) );
                                                cap.setAttribute("height",String.valueOf(prop.getProperty("cap.height") ));
                                                racine.appendChild(cap);
                                                final TransformerFactory transformerFactory = TransformerFactory.newInstance();
                                                final Transformer transformer = transformerFactory.newTransformer();
                                                final DOMSource source = new DOMSource(document);
                                                final StreamResult sortie = new StreamResult(FileReport );

                                                //final StreamResult result = new StreamResult(System.out);

                                                                             

                                                //prologue

                                                transformer.setOutputProperty(OutputKeys.VERSION, "1.0");

                                                transformer.setOutputProperty(OutputKeys.ENCODING, "UTF-8");

                                                transformer.setOutputProperty(OutputKeys.STANDALONE, "yes");                                     

                                                                            

                                                //formatage

                                                transformer.setOutputProperty(OutputKeys.INDENT, "yes");

                                                transformer.setOutputProperty("{http://xml.apache.org/xslt}indent-amount", "2");

                                                                             

                                                //sortie

                                                transformer.transform(source, sortie);              

                                              }

                                              catch (final ParserConfigurationException e)

                                              {

                                                e.printStackTrace();

                                              }

                                              catch (TransformerConfigurationException e)

                                              {

                                                e.printStackTrace();

                                              }

                                  catch (TransformerException e) {

                                              e.printStackTrace();

                                   }

           

                              //return FileReport.getAbsolutePath();

                             

               }

               /*public static  String GenerateXmlFile(String duration_ms,String started, String finished,String pass,TakeScreenshotsClassBase object, String path) throws ParserConfigurationException, SAXException, IOException

               {

                             

                              final File FileReport= new File("D:/devenv/env_yossra/capturesTest/chrome/rapports/Resul-Test.xml");

                              final DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();

                              try {

                                              final DocumentBuilder builder = factory.newDocumentBuilder();

                                              final Document document= builder.newDocument();

                                             

                                                final Element racine = document.createElement("Test-Report");

                                                document.appendChild(racine);                                          

                                                final Element cap = document.createElement("Capability");

                                                cap.setAttribute("url", object.getUrl());

                                                cap.setAttribute("browser", object.getNomdriver());

                                                cap.setAttribute("pathScreenshot", path);

                                                cap.setAttribute("width",(String) object.getWidth());

                                                cap.setAttribute("height", object.getHeight());

                                                racine.appendChild(cap);

                                                final Element detailsTest = document.createElement("Details-Test");

             detailsTest.setAttribute("pass", pass);

             detailsTest.setAttribute("duration_ms", duration_ms);

             detailsTest.setAttribute("started-at",started);

             detailsTest.setAttribute("finished-at", finished);

             racine.appendChild(detailsTest);

            

                                                final TransformerFactory transformerFactory = TransformerFactory.newInstance();

                                                final Transformer transformer = transformerFactory.newTransformer();

                                                final DOMSource source = new DOMSource(document);

                                             

                                                final StreamResult sortie = new StreamResult(FileReport );

                                                //final StreamResult result = new StreamResult(System.out);

                                                                             

                                                //prologue

                                                transformer.setOutputProperty(OutputKeys.VERSION, "1.0");

                                                transformer.setOutputProperty(OutputKeys.ENCODING, "UTF-8");

                                                transformer.setOutputProperty(OutputKeys.STANDALONE, "yes");                                     

                                                                            

                                                //formatage

                                                transformer.setOutputProperty(OutputKeys.INDENT, "yes");

                                                transformer.setOutputProperty("{http://xml.apache.org/xslt}indent-amount", "2");

                                                                             

                                                //sortie

                                                transformer.transform(source, sortie);              

                                              }

                                              catch (final ParserConfigurationException e)

                                              {

                                                e.printStackTrace();

                                              }

                                              catch (TransformerConfigurationException e)

                                              {

                                                e.printStackTrace();

                                              }

                                  catch (TransformerException e) {

                                              e.printStackTrace();

                                   }

          

                                              return FileReport.getAbsolutePath();

                                }*/



               }

   