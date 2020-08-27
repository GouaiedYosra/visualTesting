import { Component, OnInit } from '@angular/core';
import { DetailTest } from '../detail-test';
import { CapabilityService } from '../capability.service';
import { InfoTestService } from '../info-test.service';
import { Router } from '@angular/router';
import { Capability } from '../capability';
import { FirebaseService } from '../firebase.service';;
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-visual-testing-info',
  templateUrl: './visual-testing-info.component.html',
  styleUrls: ['./visual-testing-info.component.css']
})
export class VisualTestingInfoComponent implements OnInit {
  img1:string;
  items: Array<any>;
  d:DetailTest;
  detailTest:DetailTest;
  cap:Capability=new Capability();
  isLoading:boolean=false;
  browser: string;
  url: string;
 imagePath: string;
 width:number;
  height:number;
  base:boolean;
  name: string;
  pass:string;
  tempsExecution:number;
  detailsTests:any;
  constructor(private fb:FirebaseService, private capService:CapabilityService,private serviceTest:InfoTestService,private router:Router) {

   
   }
   getInfoTestList() {
    this.fb.getInfoTestList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(res => {
      this.detailsTests = res;
    });
  }
  detail_test(i:DetailTest){
    this.serviceTest.setData(i); 
    this.router.navigate(['details-test']);
  
  }
  Runtest(i:DetailTest)
  {
    this.isLoading=true;
    this.composeCap(i);
    
     this.capService.ReRuntestpost(this.cap).subscribe(res => this.detailTest = res as DetailTest);
     console.log("before wait() method");
     this.wait();
     console.log("after wait() method");
  }
 
   composeCap(i:DetailTest)
   {
   console.log(i);
    this.cap.browserName=i.browser;
    this.cap.url=i.url;
    this.cap.height=i.height;
    this.cap.width=i.width;
   }

  ngOnInit() {
    this.getInfoTestList();
  }
  async wait(){
    console.log("begin wait");
    await this.delay(190000);
    console.log("end wait");
    console.log(this.detailTest);
    this.fb.createinfoTest(this.detailTest); 
    this.serviceTest.setData(this.detailTest);  
    this.isLoading=false;
    this.router.navigate(['details-test']); 
  
  }
  delay(ms: number) {
      return new Promise( resolve => setTimeout(resolve, ms) );
  }

}
