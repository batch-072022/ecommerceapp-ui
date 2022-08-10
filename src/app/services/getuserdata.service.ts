import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GetdataService {

  url="https://ecommerce-apii.herokuapp.com/users"
  
    constructor(private http:HttpClient) { }
  
    getRestoList()
  
    {
      return this.http.get(this.url)
      
    }
    getCurrentDate (){
      return this.http.get('${this.url}/${id}')
      
    }
  }