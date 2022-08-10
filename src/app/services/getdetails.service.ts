import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class GetdataService {
  constructor(private http:HttpClient) { }
  account()
  {
    const url="https://ecommerce-apii.herokuapp.com/products"


    return this.http.get(url)

  }

}