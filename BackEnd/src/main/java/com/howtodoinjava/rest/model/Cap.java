package com.howtodoinjava.rest.model;

import org.springframework.stereotype.Component;

@Component
public class Cap {

     private String browser;
     
     private String name;
     
	public String getBrowser() {
		return browser;
	}
	public void setBrowser(String browser) {
		this.browser = browser;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
    


}