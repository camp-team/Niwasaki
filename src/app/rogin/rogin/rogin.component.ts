import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-rogin',
  templateUrl: './rogin.component.html',
  styleUrls: ['./rogin.component.scss'],
})
export class RoginComponent implements OnInit {
  form = this.fb.group({
    mail: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  get nameControl() {
    return this.form.get('mail') as FormControl;
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  submit() {
    console.log(this.form.value);
  }
}
