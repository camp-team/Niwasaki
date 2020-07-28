import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-serect',
  templateUrl: './serect.component.html',
  styleUrls: ['./serect.component.scss'],
})
export class SerectComponent implements OnInit {
  selectbutton = ['基本情報登録', '販売品登録'];

  constructor() {}

  ngOnInit(): void {}
}
