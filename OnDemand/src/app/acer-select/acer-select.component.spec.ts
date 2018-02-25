import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcerSelectComponent } from './acer-select.component';

describe('AcerSelectComponent', () => {
  let component: AcerSelectComponent;
  let fixture: ComponentFixture<AcerSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcerSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcerSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
