import { Component } from '@angular/core';
import { AuthService } from '../auth.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  isLoginMode: boolean = true;

  constructor(private authService: AuthService) { }

  submitForm(): void {
    if (this.isLoginMode) {
      // Handle login logic here
      const credentials = { email: this.email, password: this.password };
      this.authService.login(credentials).subscribe(
        (response: any) => {
          // Handle the response from the Django API for login
          console.log('Login successful!', response);
        },
        (error: any) => {
          // Handle login errors (e.g., show error message to the user)
          console.error('Login failed!', error);
        }
      );
    } else {
      // Handle signup logic here
      const signupCredentials = { email: this.email, password: this.password };
      this.authService.signup(signupCredentials).subscribe(
        (response: any) => {
          // Handle the response from the Django API for signup
          console.log('Signup successful!', response);
        },
        (error: any) => {
          // Handle signup errors (e.g., show error message to the user)
          console.error('Signup failed!', error);
        }
      );
    }
  }

  toggleFormMode(): void {
    this.isLoginMode = !this.isLoginMode;
    this.resetForm();
  }

  resetForm(): void {
    this.email = '';
    this.password = '';
  }
}