import { Component, OnInit } from '@angular/core';
import { DetailTest } from '../detail-test';
import { Router } from '@angular/router';
import { InfoTestService } from '../info-test.service';
import { Capability } from '../capability';
import { CapabilityService } from '../capability.service';
import { FirebaseService } from '../firebase.service';
@Component({
  selector: 'app-show-result',
  templateUrl: './show-result.component.html',
  styleUrls: ['./show-result.component.css']
})
export class ShowResultComponent implements OnInit {
  cap:Capability=new Capability();
  detailTest :DetailTest; 
  infotest: DetailTest=this.serviceTest.getData() ;
  pass: String;
  img:string; 
  affiche:boolean=false;
  isLoading:boolean=false;
  constructor(private fb:FirebaseService,private router:Router,private serviceTest : InfoTestService,private capService : CapabilityService) {
  this.afficheIcon(); 
  console.log(this.cap);
 this.cap.browserName=this.infotest.browser;
 this.cap.url=this.infotest.url;
 this.cap.height=this.infotest.height;
 this.cap.width=this.infotest.width;
}

afficheIcon(){
  if(this.infotest.browser="Chrome"){
    this.img="../../assets/icon/Chrome.png";
  }
  else if(this.infotest.browser="Opera"){
    this.img="../../assets/icon/Opera.png";
  }
  else if(this.infotest.browser="Firefox"){
    this.img="../../assets/icon/Firefox.png";
  }
  else if(this.infotest.browser="Edge"){
    this.img="../../assets/icon/Edge.png";
  }
  else  {
    this.img="../../assets/icon/IE.png";
  }
}

ngOnInit(): void {
}
detail_test(){
  
  this.serviceTest.setData(this.infotest);
  this.router.navigate(['details-test']); 
}

Runtest()
{
  this.isLoading=true;
  console.log(this.cap);
   this.capService.ReRuntestpost(this.cap).subscribe(res => this.detailTest = res as DetailTest);
   console.log("before wait() method");
   this.wait();
   console.log("after wait() method");
}
async wait(){
  console.log("begin wait");
  await this.delay(190000);
  console.log("end wait");
  this.fb.createinfoTest( this.detailTest);
  this.serviceTest.setData(this.detailTest);
  console.log("set the detailsTest object");  this.isLoading=false;
  this.router.navigate(['details-test']); 
}
delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}
}
