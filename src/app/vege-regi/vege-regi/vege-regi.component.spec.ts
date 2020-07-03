import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VegeRegiComponent } from './vege-regi.component';

describe('VegeRegiComponent', () => {
  let component: VegeRegiComponent;
  let fixture: ComponentFixture<VegeRegiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VegeRegiComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VegeRegiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
