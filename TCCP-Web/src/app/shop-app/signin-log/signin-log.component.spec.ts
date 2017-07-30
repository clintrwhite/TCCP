import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninLogComponent } from './signin-log.component';

describe('SigninLogComponent', () => {
  let component: SigninLogComponent;
  let fixture: ComponentFixture<SigninLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigninLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
