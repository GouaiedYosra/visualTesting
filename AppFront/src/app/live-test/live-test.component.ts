import { Component, OnInit } from '@angular/core';
import { Capability } from '../capability';
import { CapabilityService } from '../capability.service';
import { CrossBrowserResult } from '../cross-browser-result';
export interface Resolution {
  value: string;
  viewValue:string;
}
export interface Chrome {
  value: string;
  viewValue:string;
}
export interface Fire {
  value: string;
  viewValue:string;
}
export interface Opera {
  value: string;
  viewValue:string;
}
export interface Edge {
  value: string;
  viewValue:string;
}
@Component({
  selector: 'app-live-test',
  templateUrl: './live-test.component.html',
  styleUrls: ['./live-test.component.css']
})
export class LiveTestComponent implements OnInit {
  resolution: String ;
  cap:Capability=new Capability(); 
  isLoading: boolean=false;
  cbt: CrossBrowserResult;
  hide:boolean=true;
  name:string;
  pathC:string="http://127.0.0.1:888/crossbrowser/chrome/";
  pathF:string="http://127.0.0.1:888/crossbrowser/firefox/";
  pathE:string="http://127.0.0.1:888/crossbrowser/edge/";
  pathO:string="http://127.0.0.1:888/crossbrowser/opera/";
  constructor(private capService:CapabilityService) { }
  verifierResolution(){
    if(this.resolution ==='800X480'){

      this.cap.width=800;
      this.cap.height=480;
    }
    if(this.resolution ==="800X600"){
     this.cap.width=800;
     this.cap.height=600;
   }
   if(this.resolution ==="854X480"){
     this.cap.width=854;
     this.cap.height=480;
   }
   if(this.resolution ==="1024X768"){
     this.cap.width=1024;
     this.cap.height=768;
   }
   if(this.resolution ==="1280X720"){
     this.cap.width=1280;
     this.cap.height=720;
   }
   if(this.resolution ==="1280X800"){
     this.cap.width=1280;
     this.cap.height=800;
   }
   if(this.resolution ==="1366X768"){
     this.cap.width=1366;
     this.cap.height=768;
   }
   if(this.resolution ==="1400X1050"){
     this.cap.width=1400;
     this.cap.height=1050;
   }
   if(this.resolution ==="1440X900"){
     this.cap.width=1440;
     this.cap.height=900;
   }
   
   if(this.resolution ==="1600X1200"){
     this.cap.width=1600;
     this.cap.height=1200;
   }
   if(this.resolution ==="1920X1200"){
     this.cap.width=1920;
     this.cap.height=1200;
   }
   
   if(this.resolution ==="2560X1600"){
     this.cap.width=2560;
     this.cap.height=1600;
   }
   if(this.resolution ==="2560X1920"){
     this.cap.width=2560;
     this.cap.height=1920;
   }
   this.cap.browserName="firefox";
}
  ngOnInit(): void {
  }
  resolutions: Resolution[]= [
    {value: '800X480', viewValue: '800X480'},
    {value: '800X600', viewValue: '800X600'},
    {value: '854X480', viewValue: '854X480'},
    {value: '1024X768', viewValue: '1024X768'},
    {value: '1280X720', viewValue: '1280X720'},
    {value: '1280X800', viewValue: '1280X800'},
    {value: '1366X768', viewValue: '1366X768'},
    {value: '1400X1050', viewValue: '1400X1050'},
    {value: '1440X900', viewValue: '1440X900'},
    {value: '1600X1200', viewValue: '1600X1200'},
    {value: '1920X1200', viewValue: '1920X1200'},
    {value: '2560X1600', viewValue: '2560X1600'},
    {value: '2560X1920', viewValue: '2560X1920'}
  ]
  chromes: Chrome[]=[
    {value: 'null', viewValue: 'beta'},
    {value: 'null', viewValue: '84'},
    {value: 'null', viewValue: '83'},
    {value: 'null', viewValue: '81'},
    {value: 'null', viewValue: '80'},
    {value: 'null', viewValue: '79'},
    {value: 'null', viewValue: '78'},
    {value: 'null', viewValue: '77'},
    {value: 'null', viewValue: '76'},
    {value: 'null', viewValue: '75'},
    {value: 'null', viewValue: '74'},
    {value: 'null', viewValue: '73'},
    {value: 'null', viewValue: '72'},
    {value: 'null', viewValue: '71'},
    {value: 'null', viewValue: '70'}
    
  ]
  edges: Edge[]=[
    {value: 'null', viewValue: 'beta'},
    {value: 'null', viewValue: '84'},
    {value: 'null', viewValue: '83'},
    {value: 'null', viewValue: '81'},
    {value: 'null', viewValue: '80'},
    {value: 'null', viewValue: '79'},
    {value: 'null', viewValue: '18'},
    {value: 'null', viewValue: '17'},
    {value: 'null', viewValue: '16'},
    {value: 'null', viewValue: '15'},
    {value: 'null', viewValue: '14'},
    {value: 'null', viewValue: '13'}
  ]
  fires: Fire[]=[
    {value: 'null', viewValue: 'beta'},
    {value: 'null', viewValue: '79'},
    {value: 'null', viewValue: '78'},
    {value: 'null', viewValue: '77'},
    {value: 'null', viewValue: '76'},
    {value: 'null', viewValue: '75'},
    {value: 'null', viewValue: '74'},
    {value: 'null', viewValue: '73'},
    {value: 'null', viewValue: '72'},
    {value: 'null', viewValue: '71'},
    {value: 'null', viewValue: '70'}
  ]
  operas: Opera[]=[
    {value: 'null', viewValue: 'beta'},
    {value: 'null', viewValue: '84'},
    {value: 'null', viewValue: '83'},
    {value: 'null', viewValue: '81'},
    {value: 'null', viewValue: '80'},
    {value: 'null', viewValue: '79'},
    {value: 'null', viewValue: '78'},
    {value: 'null', viewValue: '77'},
    {value: 'null', viewValue: '76'},
    {value: 'null', viewValue: '75'},
    {value: 'null', viewValue: '74'},
    {value: 'null', viewValue: '73'},
    {value: 'null', viewValue: '72'},
    {value: 'null', viewValue: '71'},
    {value: 'null', viewValue: '70'}
  ]
RunTest(){
  this.verifierResolution();
  this.genereName();
  this.capService.Runtestpost(this.cap).subscribe(res => this.cbt = res as CrossBrowserResult);
  console.log("before wait() method");
  this.isLoading=true;
  this.wait();
  console.log("after wait() method");
  this.pathC=this.pathC+ this.name+".png";
  this.pathF=this.pathF+ this.name+".png";
  this.pathO=this.pathO+ this.name+".png";
  this.pathE=this.pathE+ this.name+".png";
}
genereName(){
  if(this.cap.url==="http://www.google.com")
  {
    this.name="google"+this.cap.width+"x"+this.cap.height;
  }
  else   if(this.cap.url==="http://www.amazon.fr")
  {
    this.name="amazon"+this.cap.width+"x"+this.cap.height;
  }
  else   if(this.cap.url==="http://localhost:4200")
  {
    this.name="localhost"+this.cap.width+"x"+this.cap.height;
  }
  else   if(this.cap.url==="http://google.com")
  {
    this.name="google"+this.cap.width+"x"+this.cap.height;
  }
}
async wait(){
  console.log("begin wait");
  await this.delay(20000);
  console.log("end wait");
  
  this.isLoading=false;
  this.hide=false;

}
delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}
}
