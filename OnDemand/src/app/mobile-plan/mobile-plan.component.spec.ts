import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilePlanComponent } from './mobile-plan.component';

describe('MobilePlanComponent', () => {
  let component: MobilePlanComponent;
  let fixture: ComponentFixture<MobilePlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobilePlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobilePlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
