import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CouponRoutingModule } from './coupon-routing.module';
import { ViewCouponComponent } from './view-coupon/view-coupon.component';
import { ListCouponComponent } from './list-coupon/list-coupon.component';
import { AddCouponComponent } from './add-coupon/add-coupon.component';


@NgModule({
  declarations: [
    ViewCouponComponent,
    ListCouponComponent,
    AddCouponComponent
  ],
  imports: [
    CommonModule,
    CouponRoutingModule
  ]
})
export class CouponModule { }
