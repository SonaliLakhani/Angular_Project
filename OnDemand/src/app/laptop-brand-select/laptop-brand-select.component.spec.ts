import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopBrandSelectComponent } from './laptop-brand-select.component';

describe('LaptopBrandSelectComponent', () => {
  let component: LaptopBrandSelectComponent;
  let fixture: ComponentFixture<LaptopBrandSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaptopBrandSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaptopBrandSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
