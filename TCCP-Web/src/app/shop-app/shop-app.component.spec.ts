import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopAppComponent } from './shop-app.component';

describe('ShopAppComponent', () => {
  let component: ShopAppComponent;
  let fixture: ComponentFixture<ShopAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
