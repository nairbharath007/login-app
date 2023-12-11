import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  // Hardcoded credentials
  private validUsername = 'admin';
  private validPassword = 'admin123';

  constructor(private router: Router) {}

  login() {
    if (this.loginForm.valid) {
      if (this.loginForm.value.username === this.validUsername && this.loginForm.value.password === this.validPassword) {
        // Logic to navigate to the main page
        this.router.navigate(['/navbar'])   
      } else {
        // Handle invalid credentials
        alert("Invalid Credentials.")
      }
    }
  }
}

