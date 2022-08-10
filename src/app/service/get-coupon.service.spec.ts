import { TestBed } from '@angular/core/testing';

import { GetCouponService } from './get-coupon.service';

describe('GetCouponService', () => {
  let service: GetCouponService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetCouponService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
