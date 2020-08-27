package com.howtodoinjava.rest.model;
import org.springframework.beans.factory.annotation.Value;

import org.springframework.stereotype.Component;

@Component
public class Capability {

               

                @Value("${cap.browserName}")

                private String browserName;

                @Value("${cap.url}")

                private String url;

                @Value("${cap.width}")

                private int width;

                @Value("${cap.height}")

                private int height;

               

                public String getUrl() {

                               return url;

                }

 

                public void setUrl(String url) {

                               this.url = url;

                }

 

                public String getBrowserName() {

                               return browserName;

                }

 

                public void setBrowserName(String browserName) {

                               this.browserName = browserName;

                }

 

                public int getWidth() {

                               return width;

                }

 

                public void setWidth(int width) {

                               this.width = width;

                }

 

                public int getHeight() {

                               return height;

                }

 

                public void setHeight(int height) {

                               this.height = height;

                }

               

                 

               

}

