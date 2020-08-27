import { Component, OnInit, Input } from '@angular/core';
import { CompareImagesService } from '../compare-images.service';
import { Cap } from '../cap';
import { Images } from '../images';
import { InfoTestService } from '../info-test.service';
import { DetailTest } from '../detail-test';
 
export interface Path {
  value:string;
  viewValue:string;
  img:string;
}
@Component({
  selector: 'app-allscreenshots',
  templateUrl: './allscreenshots.component.html',
  styleUrls: ['./allscreenshots.component.css']
})

export class AllscreenshotsComponent implements OnInit {
  @Input() Cap: Cap;
  @Input() infoTest: DetailTest;
  cap:Cap;
  infotest:DetailTest;
 listImages:string [];
 image:Images=new Images();
 paths: Path[]=[
   {value:'',viewValue:'',img:''}
 ];
 selected = null;
 selected2=null;
 hidden:boolean=true;
 h:boolean=true;
 p1:string;
 p2:string;
 p3:string=null;
 i1: string;
 l:string;
 isLoading: boolean;
  constructor(private imageService: CompareImagesService,private serviceTest:InfoTestService ) {
 
   }
   display(){
    if(this.selected !== null){
      this.hidden=false;
      this.p1=this.selected;
    }
    if(this.selected2 !== null){
     this.h=false;
     this.p2=this.selected2;
   }

   }
   
   Deny(){
    this.hidden=true;
    this.h=true;
    this.p3=null;
   }
  ngOnInit(): void {
    this.isLoading=true;
   this.cap=this.imageService.getData();
   this.infotest=this.serviceTest.getData();
   console.log(this.cap);
    this.imageService.AllImages(this.cap).subscribe(res => this.listImages = res as string[]);
    this.wait(5000);
    this.isLoading=false;
  }
  compare(){
    this.isLoading=true;
    this.createPath(this.p1);
    this.image.pathBaseline=this.i1;
    this.createPath(this.p2);
    this.image.pathCheckpoint=this.i1;
    this.image.h=this.infotest.height;
    this.image.w=this.infotest.width;
    this.imageService.CompareImages(this.image);
    this.wait1(15000);
    this.isLoading=false;
    this.p3="http://127.0.0.1:8887/compare/diff.png";
  }
  async wait1(n:number){
    await this.delay(n);
    console.log("wait methode");}
  async wait(n:number){
   await this.delay(n);
   console.log("wait methode");
   var list=this.listImages;
   console.log(list);
      let c='http://127.0.0.1:8887/Chrome/imageBaseline/'+this.cap.name+'.png';
      let o='http://127.0.0.1:8887/Opera/imageBaseline/'+this.cap.name+'.png';
      let f='http://127.0.0.1:8887/Firefox/imageBaseline/'+this.cap.name+'.png';
      let e='http://127.0.0.1:8887/Edge/imageBaseline/'+this.cap.name+'.png';
     var n=list.length;
      for(let i in list)
      {
      this.l=list[i];
      console.log(this.l); 
      if(this.l == c)
      {
        let p:Path={
         value:this.l,
         viewValue:this.cap.name,
         img:"../../assets/icon/Chrome.png"
        };
         this.paths.push(p);
      } 
      else if(this.l == o)
      {
        let p:Path={
         value:this.l,
         viewValue:this.cap.name,
         img:"../../assets/icon/Opera.png"};
         this.paths.push(p);
      } 
      else if(this.l == f)
      {  let p:Path={
        value:this.l,
       viewValue:this.cap.name,
        img:"../../assets/icon/Firefox.png"};
         this.paths.push(p);
      } 
     else if(this.l == e)
      {  let p:Path={
         value:this.l,
         viewValue:this.cap.name,
         img:"../../assets/icon/Edge.png"};
         this.paths.push(p);
      } 
     console.log(this.paths);
    }
 
 }
 delay(ms: number) {
   return new Promise( resolve => setTimeout(resolve, ms) );
 }
  createPath(pi: string){
      let c="http://127.0.0.1:8887/Chrome/imageBaseline/"+this.cap.name+".png"; 
      let o="http://127.0.0.1:8887/Opera/imageBaseline/"+this.cap.name+".png"; 
      let f="http://127.0.0.1:8887/Firefox/imageBaseline/"+this.cap.name+".png";
      let e="http://127.0.0.1:8887/Edge/imageBaseline/"+this.cap.name+".png"; 
      if(pi === c)
      {
         this.i1= "C:/Users/GOUAIED/OneDrive/Bureau/springbootrestdemo/springbootrestdemo1/screenshots/chrome/imageBaseline/"+this.cap.name+".png";
      } 
     else if(pi === o)
     {
        this.i1= "C:/Users/GOUAIED/OneDrive/Bureau/springbootrestdemo/springbootrestdemo1/screenshots/opera/imageBaseline/"+this.cap.name+".png";
     } 
     else if(pi === f)
     {
        this.i1= "C:/Users/GOUAIED/OneDrive/Bureau/springbootrestdemo/springbootrestdemo1/screenshots/firefox/imageBaseline/"+this.cap.name+".png";
     }
     else if(pi === e)
     {
        this.i1= "C:/Users/GOUAIED/OneDrive/Bureau/springbootrestdemo/springbootrestdemo1/screenshots/edge/imageBaseline/"+this.cap.name+".png";
     }
  }

}
