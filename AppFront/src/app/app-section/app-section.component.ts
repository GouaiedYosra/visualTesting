import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
@Component({
  selector: 'app-app-section',
  templateUrl: './app-section.component.html',
  styleUrls: ['./app-section.component.css'],
 
})
export class AppSectionComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  Onsubmit(): void{

    this.router.navigate(['startTest']);
     
  }
   automaticTest(): void{}
   ToliveTest(){this.router.navigate(['live-test']);
  }
}
