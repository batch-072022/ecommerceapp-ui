import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listcoupon',
  templateUrl: './listcoupon.component.html',
  styleUrls: ['./listcoupon.component.css']
})
export class ListcouponComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
coupons=[
  {id:"0",code:"CZKP50"},
  {id:"1",code:"ABC50"},
  {id:"2",code:"BCD50"},
  {id:"3",code:"CDE50"},
  {id:"4",code:"DEF50"}
]
}
