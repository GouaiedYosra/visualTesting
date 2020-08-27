import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AppFront';
  hide:boolean=false;
  log_out:boolean=false;
  constructor(private router:Router,private authService: AuthService){
    const config = {
      apiKey: "AIzaSyCQtFKncmlc8iMRndTB_-ba-wUaQN2-n2k",
      authDomain: "vtadatabase.firebaseapp.com",
      databaseURL: "https://vtadatabase.firebaseio.com",
      projectId: "vtadatabase",
      storageBucket: "vtadatabase.appspot.com",
      messagingSenderId: "17909357493",
      appId: "1:17909357493:web:70dd28a0b665da5bbe57fc",
      measurementId: "G-BNZ7K1EHFE"
    };
    firebase.initializeApp(config);
  }
  onSubmit() : void{
    this.router.navigate(['startTest']);
  }
  logout(){
    this.hide=true;
    this.authService.signOutUser();
    this.router.navigate(['auth/signin']);
  }
}
