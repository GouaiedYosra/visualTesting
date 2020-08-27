package com.howtodoinjava.rest.model;
  


import org.springframework.stereotype.Component;



@Component

public class Images {

     private String pathBaseline;

     private String pathCheckpoint;
     
     private int w;
     private int h;

     public int getW() {
		return w;
	}

	public void setW(int w) {
		this.w = w;
	}

	public int getH() {
		return h;
	}

	public void setH(int h) {
		this.h = h;
	}

	public Images() {

          

     }

     public Images(String path1, String path2)

     {

          

           pathBaseline=path1;

           pathCheckpoint=path2;

     }

     public String getPathBaseline() {

           return pathBaseline;

     }

     public void setPathBaseline(String pathBaseline) {

           this.pathBaseline = pathBaseline;

     }

     public String getPathCheckpoint() {

           return pathCheckpoint;

     }

     public void setPathCheckpoint(String pathCheckpoint) {

           this.pathCheckpoint = pathCheckpoint;

     }



}