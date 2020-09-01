import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  form = this.fb.group({
    name: ['', [Validators.required, Validators.maxLength(40)]],
    mail: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  get nameControl() {
    return this.form.get('name') as FormControl;
  }

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit(): void {}

  submit() {
    console.log(this.form.value);
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }
}
