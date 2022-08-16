import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CouponRoutingModule } from './coupon-routing.module';
import { ViewCouponComponent } from './view-coupon/view-coupon.component';
import { ListCouponComponent } from './list-coupon/list-coupon.component';


@NgModule({
  declarations: [
    ViewCouponComponent,
    ListCouponComponent
  ],
  imports: [
    CommonModule,
    CouponRoutingModule
  ]
})
export class CouponModule { }
