import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyCouponCodeComponent } from './apply-coupon-code.component';

describe('ApplyCouponCodeComponent', () => {
  let component: ApplyCouponCodeComponent;
  let fixture: ComponentFixture<ApplyCouponCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplyCouponCodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplyCouponCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
