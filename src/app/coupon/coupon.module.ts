import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CouponRoutingModule } from './coupon-routing.module';
import { ViewCouponComponent } from './view-coupon/view-coupon.component';


@NgModule({
  declarations: [
    ViewCouponComponent
  ],
  imports: [
    CommonModule,
    CouponRoutingModule
  ]
})
export class CouponModule { }
