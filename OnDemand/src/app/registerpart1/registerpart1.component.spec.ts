import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Registerpart1Component } from './registerpart1.component';

describe('Registerpart1Component', () => {
  let component: Registerpart1Component;
  let fixture: ComponentFixture<Registerpart1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Registerpart1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Registerpart1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
