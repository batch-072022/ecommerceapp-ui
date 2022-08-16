import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-coupon',
  templateUrl: './view-coupon.component.html',
  styleUrls: ['./view-coupon.component.css']
})
export class ViewCouponComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  coupon={ 
    sno: 1,
    couponname: "COUPON10",
    expiry: "2022-08-30",
    status: "Active"
};

}
