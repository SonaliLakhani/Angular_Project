import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppleSelectComponent } from './apple-select.component';

describe('AppleSelectComponent', () => {
  let component: AppleSelectComponent;
  let fixture: ComponentFixture<AppleSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppleSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppleSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
