import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Data } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  form = this.fb.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  get nameControl() {
    return this.form.get('email') as FormControl;
  }

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit(): void {}

  submit() {
    const value: { email: string; password: string } = {
      email: this.form.value.email,
      password: this.form.value.password,
    };
    this.authService.createUser(value);
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }
}
