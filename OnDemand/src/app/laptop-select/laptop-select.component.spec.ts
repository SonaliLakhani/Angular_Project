import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopSelectComponent } from './laptop-select.component';

describe('LaptopSelectComponent', () => {
  let component: LaptopSelectComponent;
  let fixture: ComponentFixture<LaptopSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaptopSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaptopSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
