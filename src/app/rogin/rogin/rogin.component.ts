import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/interfaces/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rogin',
  templateUrl: './rogin.component.html',
  styleUrls: ['./rogin.component.scss'],
})
export class RoginComponent implements OnInit {
  form = this.fb.group({
    email: ['', [Validators.required, Validators.maxLength(254)]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  get nameControl() {
    return this.form.get('email') as FormControl;
  }

  user$: Observable<User> = this.authService.user$;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  submit() {
    const value: { email: string; password: string } = {
      email: this.form.value.email,
      password: this.form.value.password,
    };
    this.authService.userLogin(value);
  }

  login() {
    this.authService.login();
  }
}
