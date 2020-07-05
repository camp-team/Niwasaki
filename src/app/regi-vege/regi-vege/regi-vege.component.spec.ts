import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegiVegeComponent } from './regi-vege.component';

describe('RegiVegeComponent', () => {
  let component: RegiVegeComponent;
  let fixture: ComponentFixture<RegiVegeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RegiVegeComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegiVegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
