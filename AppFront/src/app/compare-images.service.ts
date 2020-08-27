import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Images } from './images';
import { Cap } from'./cap';
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
export class CompareImagesService {
  private cap: Cap;
  private  baseUrl ='http://localhost:8080/images/';
  constructor(private http: HttpClient) { }
  setData(c:Cap):void{
    this.cap=c;
  }
  getData():Cap{
    let temp: Cap=this.cap;
    this.clearData();
    return temp;
  }
  clearData(): void{
    this.cap = undefined;
  }
  CompareImages(img:Images){
    return this.http.post(this.baseUrl+"compare",img,httpOptions);
  }
  AllImages(cap: Cap)
  {
    return this.http.post(this.baseUrl+"allImages/",cap,httpOptions);
  }
}
