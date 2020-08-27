import { Component, OnInit } from '@angular/core';
import { DetailTest } from '../detail-test';
import { Capability } from '../capability';
import { CapabilityService } from '../capability.service';
import { InfoTestService } from '../info-test.service';
import { Router } from '@angular/router';
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";
import { FirebaseService } from '../firebase.service';
// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";
 

export interface Browser{
  value: string;
  viewValue: string;
  img: string;
}

export interface Resolution {
  value: string;
  viewValue:string;
}
@Component({
  selector: 'app-testscreenshot',
  templateUrl: './testscreenshot.component.html',
  styleUrls: ['./testscreenshot.component.css']
})
export class TestscreenshotComponent implements OnInit {
  detailTest: DetailTest= new DetailTest();
  resolution: String ;
  Loading: boolean=false;
  cap : Capability=new Capability(); 
  d:number;
  constructor(private fb:FirebaseService, private capService : CapabilityService, private infoTest: InfoTestService,private router:Router) { 
    const firebaseConfig = {
      apiKey: "AIzaSyCQtFKncmlc8iMRndTB_-ba-wUaQN2-n2k",
      authDomain: "vtadatabase.firebaseapp.com",
      databaseURL: "https://vtadatabase.firebaseio.com",
      projectId: "vtadatabase",
      storageBucket: "vtadatabase.appspot.com",
      messagingSenderId: "17909357493",
      appId: "1:17909357493:web:70dd28a0b665da5bbe57fc",
      measurementId: "G-BNZ7K1EHFE"
    };
 
 /*   firebase.initializeApp(firebaseConfig);
    var admin = require("firebase-admin");

var serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://vtadatabase.firebaseio.com"
});*/
  }
    ngOnInit() {
 
    }
browsers: Browser[]= [

  {value: 'IE', viewValue: 'IE',img:'../../assets/icon/IE.png'},
  {value: 'Chrome', viewValue: 'Chrome',img:'../../assets/icon/Chrome.png'},
  {value: 'Firefox', viewValue: 'Firefox',img:'../../assets/icon/Firefox.png'},
  {value: 'Opera', viewValue: 'Opera',img:'../../assets/icon/Opera.png'},
  {value: 'Edge', viewValue: 'Edge',img:'../../assets/icon/Edge.png'}
]
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
}
RunTest(){
    this.Loading=true;
    this.verifierResolution();
    this.capService.Runtestpost(this.cap).subscribe(res => this.detailTest = res as DetailTest);
    console.log("before wait() method");

    this.wait();
    console.log("after wait() method");
}
waitTime(){
  if(this.cap.browserName=="Chrome"){
    this.d=60000;
  }
  else  if(this.cap.browserName=="Firefox"){
    this.d=93000; 
  }
  else if(this.cap.browserName=="Opera"){
    this.d=88000;
  }
  else if(this.cap.browserName=="Edge"){
    this.d=85000;
  }
  else {
    this.d=85000;
  }
}
async wait(){
  console.log("begin wait");
  this.waitTime();
  await this.delay(this.d);
  console.log("end wait");
  console.log(this.detailTest);
  this.fb.createinfoTest(this.detailTest); 
  this.infoTest.setData(this.detailTest);  
  this.Loading=false;
  this.router.navigate(['result-test']); 

}
delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}

}
