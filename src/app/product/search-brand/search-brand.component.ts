import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-brand',
  templateUrl: './search-brand.component.html',
  styleUrls: ['./search-brand.component.css']
})
export class SearchBrandComponent implements OnInit {

  title = 'ECOMERCEAPP';
  constructor(private http: HttpClient){

  }
  products!: any[];

  brandName:string ="";

  ngOnInit(): void{
    console.log('ngOnInit')
    this.http.get(' https://ecommerce-apii.herokuapp.com/products').subscribe(( res:any)=>{
      this.products = res;
      console.log(res);
  }) ;
  }

}
