import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GadgetSelectComponent } from './gadget-select.component';

describe('GadgetSelectComponent', () => {
  let component: GadgetSelectComponent;
  let fixture: ComponentFixture<GadgetSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GadgetSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GadgetSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
