import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  private users = [
    { username: 'admin', password: 'admin123' },
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' }
  ];

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

 

  invalidCredentials = false;
  constructor(private router: Router) {}

  login() {
    const user = this.users.find(u => 
      u.username === this.loginForm.value.username && 
      u.password === this.loginForm.value.password
    );

    if (user) {
      this.router.navigate(['/navbar']);
      this.invalidCredentials = false;
    } else {
      this.invalidCredentials = true;
    }
  }

    closeAlert() {
      this.invalidCredentials = false;  
  }
}

