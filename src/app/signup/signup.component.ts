import { Component } from '@angular/core';
import { SignupForm } from '../interface/SignupForm';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})



export class SignupComponent {


  signupForm:SignupForm = {
    username:'',
    password:'',
    confirmPassword:'',
  }

  constructor(private http:HttpClient){}

  signup(){

  }


}
