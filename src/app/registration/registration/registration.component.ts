import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

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

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private userService: UserService
  ) {}

  ngOnInit(): void {}

  submit() {
    this.authService.createUser(this.form.value);
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }
}
