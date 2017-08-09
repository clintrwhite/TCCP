import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedeemHoursComponent } from './redeem-hours.component';

describe('RedeemHoursComponent', () => {
  let component: RedeemHoursComponent;
  let fixture: ComponentFixture<RedeemHoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedeemHoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedeemHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
