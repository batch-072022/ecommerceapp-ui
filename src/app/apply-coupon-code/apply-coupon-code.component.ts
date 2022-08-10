import { Component, OnInit } from '@angular/core';
import { switchAll } from 'rxjs';

@Component({
  selector: 'app-apply-coupon-code',
  templateUrl: './apply-coupon-code.component.html',
  styleUrls: ['./apply-coupon-code.component.css']
})
export class ApplyCouponCodeComponent implements OnInit {
  coupenCodeForm: any;
  formBuilder: any;
  loggingIn: boolean | undefined;
  totalPrice: number | undefined;
  getCoupenCode: any;
  subtotalPrice: number | undefined;
  coupenService: any;

  constructor() { 
    
  }

  ngOnInit(): void {
  }
  coupon = [

    {id:1, code:"DISCOUNT10", status:"active",percentage :"10",expirydate :"30-07-2022",TotalAmount :"1000",FinalAmount :"900"},
    {id:2, code:"DISCOUNT20", status:"active",percentage :"20",expirydate :"30-08-2022",TotalAmount :"2000",FinalAmount :"1600"},
  ]

Apply()
{
  alert("Applied coupon code sucessfully");
}
  coupenCodeValue(coupenCodeValue: any) {
    throw new Error('Method not implemented.');
  }
}
