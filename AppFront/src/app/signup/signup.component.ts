import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  email:string;
  password:string;
  errorMessage: string;

  constructor(private authService: AuthService,
              private router: Router,private toastr:ToastrService) { }

  ngOnInit() {
  }


  onSubmit() {
    this.authService.
    createNewUser(this.email, this.password).then(
      () => {
        this.toastr.success("SIGN UP in correctly");
        this.router.navigate(['home']);
      },
      (error) => {
        this.errorMessage = error;
        this.toastr.error(this.errorMessage)
      }
    );
  }

}
