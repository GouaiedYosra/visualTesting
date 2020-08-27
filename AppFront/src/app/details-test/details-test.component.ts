import { Component, OnInit, Input, Output } from '@angular/core';
import { DetailTest } from '../detail-test';
import { Images } from '../images';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { InfoTestService } from '../info-test.service';
import { CompareImagesService } from '../compare-images.service';
 
import { Cap } from '../cap';
@Component({
  selector: 'app-details-test',
  templateUrl: './details-test.component.html',
  styleUrls: ['./details-test.component.css']
})
export class DetailsTestComponent implements OnInit {
  @Input() infoTest: DetailTest;
  exist:boolean=false;
  cap:Cap=new Cap();  
  infotest: DetailTest=this.serviceTest.getData();
  path1:any;
  path2: any=null;
  path3:string;
  type:string;
  screenName:string;
  pass:String;
  imageEntree: Images=new Images();
  compare:boolean;
  display:boolean=false;
  previewUrl:any = null;
  isLoading:boolean=false;
 
  constructor(  private sanitizer: DomSanitizer,private router:Router,private serviceTest : InfoTestService,private compareService:CompareImagesService)
{
   if(this.infotest.base == true){
   this.type="BaseLine Screenshot";
   this.path1="http://127.0.0.1:8887/"+this.infotest.imagePath+".png";
   }
   else{
   this.type="Checkpoint Screenshot";
   this.path2="http://127.0.0.1:8887/"+this.infotest.imagePath+".png";
   this.exist=true;
   this.path1="http://127.0.0.1:8887/"+this.infotest.browser+"/imageBaseline/"+this.infotest.name+".png";
   }

}
async wait(){
  await this.delay(23000);
  console.log("wait methode");
  this.path3= "http://127.0.0.1:8887/compare/diff.png"; 
  this.isLoading=false;
  this.compare=true;
}
delay(ms: number) {
  return new Promise( resolve => setTimeout(resolve, ms) );
}
Compare(){
  this.isLoading=true;
  this.display=false;
  this.imageEntree.w=this.infotest.width;
  this.imageEntree.h=this.infotest.height;
  this.imageEntree.pathCheckpoint="C:/Users/GOUAIED/OneDrive/Bureau/springbootrestdemo/springbootrestdemo1/screenshots/"+this.infotest.imagePath+".png";
  this.imageEntree.pathBaseline="C:/Users/GOUAIED/OneDrive/Bureau/springbootrestdemo/springbootrestdemo1/screenshots/"+this.infotest.browser+"/imageBaseline/"+this.infotest.name+".png";
  console.log(this.imageEntree);
  this.compareService.CompareImages(this.imageEntree).subscribe(res =>this.path3=res as string);

 this.wait();

}
previous(){
  this.router.navigate(['visual-testing-info']);
}
AllScreen(){
  this.router.navigate(['all-images']);
 }
Display(){
  this.display=true;
}
unDisplay(){
  this.display=false;
}

  ngOnInit(): void {
    this.cap.browser="chrome";
    this.cap.name=this.infotest.name;
    this.compareService.setData(this.cap);  
    this.serviceTest.setData(this.infotest);

  }

}
