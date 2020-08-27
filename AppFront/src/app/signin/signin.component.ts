import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  password:string;
  email:string;
  errorMessage: string;
  constructor(private router:Router,private toastr:ToastrService, private authService: AuthService,) { }

  ngOnInit(): void {
  }
  onSubmit() {
    console.log(this.email);
    console.log(this.password);
    this.authService.signInUser(this.email, this.password).then(
      () => {
        this.toastr.success("Loged in correctly");
        this.router.navigate(['home']);
      },
      (error) => {
        this.errorMessage = error;
        this.toastr.error(this.errorMessage)
      }
    );
  }
  signup(){
    this.router.navigate(['auth/signup']);

  }
}
