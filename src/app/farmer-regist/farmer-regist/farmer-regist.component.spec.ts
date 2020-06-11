import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerRegistComponent } from './farmer-regist.component';

describe('FarmerRegistComponent', () => {
  let component: FarmerRegistComponent;
  let fixture: ComponentFixture<FarmerRegistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmerRegistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerRegistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
