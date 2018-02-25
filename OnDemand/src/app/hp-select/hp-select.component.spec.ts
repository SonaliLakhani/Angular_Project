import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HpSelectComponent } from './hp-select.component';

describe('HpSelectComponent', () => {
  let component: HpSelectComponent;
  let fixture: ComponentFixture<HpSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HpSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HpSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
