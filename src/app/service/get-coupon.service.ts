import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GetCouponService {

  constructor(private http:HttpClient) { }
  users()
  {
    const url="http://ecommerce-apii.herokuapp.com/coupons"
    return this.http.get(url)
  }
}
