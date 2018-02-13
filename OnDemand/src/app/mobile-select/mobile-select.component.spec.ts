import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileSelectComponent } from './mobile-select.component';

describe('MobileSelectComponent', () => {
  let component: MobileSelectComponent;
  let fixture: ComponentFixture<MobileSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
