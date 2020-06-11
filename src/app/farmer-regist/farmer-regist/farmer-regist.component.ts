import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-farmer-regist',
  templateUrl: './farmer-regist.component.html',
  styleUrls: ['./farmer-regist.component.scss']
})
export class FarmerRegistComponent implements OnInit {
  form = this.fb.group({
    name: ['', [Validators.required, Validators.maxLength(40)]],
    mail: ['', [Validators.required]],
    tel: ['', [Validators.required]],
    password: ['', [Validators.required]], 
  });

  get nameControl() {
    return this.form.get('name') as FormControl;
  }
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  submit() {
    console.log(this.form.value);
  }

}
