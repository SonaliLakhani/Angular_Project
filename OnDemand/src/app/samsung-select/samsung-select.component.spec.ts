import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamsungSelectComponent } from './samsung-select.component';

describe('SamsungSelectComponent', () => {
  let component: SamsungSelectComponent;
  let fixture: ComponentFixture<SamsungSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamsungSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamsungSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
