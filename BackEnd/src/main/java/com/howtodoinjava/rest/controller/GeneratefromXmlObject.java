package com.howtodoinjava.rest.controller;


import java.awt.AWTException;

import java.io.File;



import java.io.IOException;





import javax.xml.parsers.DocumentBuilder;

import javax.xml.parsers.DocumentBuilderFactory;

import javax.xml.parsers.ParserConfigurationException;



import org.w3c.dom.Document;

import org.w3c.dom.Element;

import org.w3c.dom.Node;

import org.w3c.dom.NodeList;

import org.xml.sax.SAXException;



import com.howtodoinjava.rest.model.InfoTest;

public class GeneratefromXmlObject {

   private  InfoTest infoTest=new InfoTest();

               public InfoTest generateInfoTestModel()throws ParserConfigurationException,SAXException,IOException, AWTException, InterruptedException

               {

                 

                   File fileCap= new File("src/main/resources/testngResult.xml");

                   File resultTest= new File("C:/Users/GOUAIED/OneDrive/Bureau/springbootrestdemo/springbootrestdemo1/target/surefire-reports/testng-results.xml");

                   GenerateResultfromReportTest(resultTest);

                             

                              generateName(fileCap);

                                 return infoTest;



                              }

              



private void generateName(File file) {

               final DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();

              

               try {

               final DocumentBuilder builder = factory.newDocumentBuilder();                          

               final Document document= builder.parse(file);

               final Element test_report = document.getDocumentElement();

               final NodeList allNodes = test_report.getChildNodes();



               final Node capNode = allNodes.item(1);



               if(capNode.getNodeType()== Node.ELEMENT_NODE) {

               final Element capa= (Element)capNode;

               this.infoTest.setName(capa.getAttribute("name"));

               this.infoTest.setImagePath(capa.getAttribute("pathScreenshot"));

    this.infoTest.setBrowser(capa.getAttribute("browser"));

    this.infoTest.setUrl(capa.getAttribute("url"));

    this.infoTest.setBase(Boolean.parseBoolean(capa.getAttribute("base")));

    //System.out.println("generation file : and url in infotest object= "+this.infoTest.getUrl());

    this.infoTest.setWidth(Integer.parseInt(capa.getAttribute("width")));

    this.infoTest.setHeight(Integer.parseInt(capa.getAttribute("height")));}

               }catch(ParserConfigurationException e) {

                              e.printStackTrace();

               }

               catch (SAXException e) {

                              e.printStackTrace();

               }

               catch (IOException e) {

                              e.printStackTrace();

               }

                             

               }



public void GenerateResultfromReportTest(File file)

{

Element Suite;

try {

final DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();

final DocumentBuilder builder = factory.newDocumentBuilder();                          

final Document document= builder.parse(file);

final Element racine = document.getDocumentElement();

String status = racine.getAttribute("passed");



final NodeList racineNoeuds = racine.getChildNodes();

int i=0;

 while((racineNoeuds.item(i).getNodeName()!= "suite"))

 {

                 i++;

 }

final Node suit=racineNoeuds.item(i);

System.out.println(suit.getNodeName());

if(suit.getNodeType() == Node.ELEMENT_NODE) {

Suite=(Element)suit;

String duration_ms = Suite.getAttribute("duration-ms");

//String Started_at = Suite.getAttribute("started-at");

//String Finished_at = Suite.getAttribute("finished-at");

this.infoTest.setTempsExecution(Integer.parseInt(duration_ms));

this.infoTest.setPass(status);



}

}

catch(ParserConfigurationException e){

               e.printStackTrace();

               }

catch (SAXException e) {

               e.printStackTrace();

}

catch (IOException e) {

               e.printStackTrace();

}



}







}

