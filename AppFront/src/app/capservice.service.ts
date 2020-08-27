import { Injectable } from '@angular/core';
import { Cap } from './cap';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CapserviceService {
  cap : Cap;
  constructor(private router:Router) { }
 setData(cap:Cap):void{
   this.cap=cap;
 }
 getData():Cap{
   let temp: Cap=this.cap;
   this.clearData();
   return temp;
 }
 clearData(): void{
  this.cap = undefined;
}
}
