import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetdataService {

  constructor(private http:HttpClient) { }
  users()
  {
    const url="https://ecommerce-apii.herokuapp.com/accounts"
    return this.http.get(url)
  }
}