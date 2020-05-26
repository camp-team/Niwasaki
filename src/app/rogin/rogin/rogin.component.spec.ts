import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoginComponent } from './rogin.component';

describe('RoginComponent', () => {
  let component: RoginComponent;
  let fixture: ComponentFixture<RoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RoginComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
