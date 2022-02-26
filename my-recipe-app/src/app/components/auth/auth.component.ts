import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  isLoginMode: boolean = true;
  authForm: FormGroup;
  constructor() {}

  ngOnInit(): void {
    this.authForm = new FormGroup({
      email: new FormControl(null, [Validators.email, Validators.required]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  toggleMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  submitAuth() {
    console.log(this.authForm.value);
    console.log(this.authForm.get('email').errors);
    console.log(this.authForm.get('password').errors);
  }
}
