import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoursEditComponent } from './hours-edit.component';

describe('HoursEditComponent', () => {
  let component: HoursEditComponent;
  let fixture: ComponentFixture<HoursEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoursEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoursEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
