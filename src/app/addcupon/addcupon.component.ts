import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addcupon',
  templateUrl: './addcupon.component.html',
  styleUrls: ['./addcupon.component.css']
})
export class AddcuponComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
coupons=[
  {id:"1",CouponId:"SRAVANAMASAM50",exp:"16-08-2000"},
  {id:"2",CouponId:"AUGUST15SALE",  exp:"17-08-2022"},
  {id:"3",CouponId:"VINAYAKA8857",  exp:"02-09-2022"}

]
Updateexp(){
  alert("Sucessfully updated expiry")
}
}
