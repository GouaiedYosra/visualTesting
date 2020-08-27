import { Injectable } from '@angular/core';
import { DetailTest } from './detail-test';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class InfoTestService {
  details_Test: DetailTest;
  
  constructor(private router:Router) { }
 setData(test:DetailTest):void{
   this.details_Test=test;
 }
 getData():DetailTest{
   let temp: DetailTest=this.details_Test;
   this.clearData();
   return temp;
 }
 clearData(): void{
  this.details_Test = undefined;
}
}
