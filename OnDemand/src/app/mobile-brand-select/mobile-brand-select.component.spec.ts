import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileBrandSelectComponent } from './mobile-brand-select.component';

describe('MobileBrandSelectComponent', () => {
  let component: MobileBrandSelectComponent;
  let fixture: ComponentFixture<MobileBrandSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileBrandSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileBrandSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
