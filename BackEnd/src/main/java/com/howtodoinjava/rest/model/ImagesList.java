package com.howtodoinjava.rest.model;



import java.util.List;
import org.springframework.stereotype.Component;

@Component

public class ImagesList {

               private List<String> ListImages;
               public ImagesList() {
            	   
               }
               public void addImage(String a) {

                   this.ListImages.add(a);

               }
               

               public void setListImages(List<String> listImages) {

                              ListImages = listImages;

               }

               public List<String> allImages()

               {

                              //definition  function

                              return this.ListImages;

               }

}
