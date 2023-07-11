import { Component } from '@angular/core';
import { LoginForm } from '../interface/LoginForm';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: LoginForm = {
    username: '',
    password: '',
  };
  constructor(private http: HttpClient) {}

  login() {
    this.http.post('http://localhost:8080/users/login', this.loginForm).subscribe(
      (response: any) => {
        if (response.status === 200) {
          // Login successful
          console.log("success");
          
          console.log(response);

          // Redirect to the desired page or perform any other actions
        } else {
          // Login failed
          console.log(response);

          // Display an error message or perform any other actions
        }
      },
      (error) => {
        // Error occurred during login
        if(error.status === 401){
          console.log(error.error.message);
          console.log(error);
          
          
        }
        else{
          console.log('Login error:', error);
        }
      }
    );
  }
}
