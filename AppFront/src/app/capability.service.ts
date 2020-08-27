import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Capability } from './capability';
import { CrossBrowserResult } from './cross-browser-result';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json',
                             'Accept': 'application/json',
                             'Access-Control-Allow-Methods':'GET,HEAD,OPTIONS,POST,PUT',
                             'Access-Control-Allow-Origin': 'http://localhost:4200'
                             })
};
@Injectable({
  providedIn: 'root'
})
export class CapabilityService {

  public cap: Capability;
  public cbt: CrossBrowserResult;
  private  baseUrl ='http://localhost:8080/cap/';
  constructor(private http: HttpClient) {}
  Runtestpost(cap:Capability) {
   return this.http.post(this.baseUrl,cap,httpOptions);
   //.subscribe(data => console.log(data));
    //toPromise().then(res =>this.details_test= res as DetailTest);
  }
  ReRuntestpost(cap:Capability) {
    return this.http.post(this.baseUrl+'re-runtest',cap,httpOptions);
    //.subscribe(data => console.log(data));
     //toPromise().then(res =>this.details_test= res as DetailTest);
   }
   crossBrowserTest(cap:Capability)
   { 
    return this.http.post(this.baseUrl+'/cross-browser-test',cap,httpOptions);
   }
}
