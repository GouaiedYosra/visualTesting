package com.howtodoinjava.rest.model;


public class InfoTest {

     

      public InfoTest() {

           

      }

     

      public InfoTest(int tex,String imgpath,String pass, String url, String br, int width,int height ) {

            super();

            this.tempsExecution=tex;

            this.imagePath=imgpath;

            this.pass=pass;

            this.url=url;

            this.browser=br;

            this.width=width;

            this.height=height;

      }

     

      public int getTempsExecution() {

            return tempsExecution;

      }

      public void setTempsExecution(int tempsExecution) {

            this.tempsExecution = tempsExecution;

      }

      public String getImagePath() {

            return imagePath;

      }

      public void setImagePath(String imagePath) {

            this.imagePath = imagePath;

      }

      public String getPass() {

            return pass;

      }

      public void setPass(String pass) {

            this.pass = pass;

      }

      public String getUrl() {

            return url;

      }

      public void setUrl(String url) {

            this.url = url;

      }

      public String getBrowser() {

            return browser;

      }

      public void setBrowser(String browser) {

            this.browser = browser;

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

      private int tempsExecution;

      private String imagePath;

      private String pass;

      private String url;

      private String name;

      private boolean base;

      public String getName() {

            return name;

      }

 

      public void setName(String name) {

            this.name = name;

      }

      private String browser;

      private int width;

      private int height;

     

      @Override

            public String toString()

            {

                  System.out.println("ToString method");

                  return "InfoTest [ TempsExecution: "+this.tempsExecution+", ImagePath: "+this.imagePath+ ", name: "+this.name+ ", base: "+this.base+",Status: "+this.pass+", Url: "+this.url+", Browser: "+this.browser+", Dimension: "+this.width+" * "+this.height+" ]";

                 

            }

 

      public boolean getBase() {

            return base;

      }

 

      public void setBase(boolean base) {

            this.base = base;

      }

 

}
