import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent implements OnInit {
  selectButtonLabels = ['基本情報変更', '販売品登録'];

  constructor() {}

  ngOnInit(): void {}
}
