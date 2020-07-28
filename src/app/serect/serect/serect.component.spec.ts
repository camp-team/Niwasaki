import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerectComponent } from './serect.component';

describe('SerectComponent', () => {
  let component: SerectComponent;
  let fixture: ComponentFixture<SerectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SerectComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
