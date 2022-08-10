import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css']
})
export class SearchProductComponent implements OnInit {

  title = 'ECOMERCEAPP';

  constructor(private http: HttpClient){



  }

  products!: any[];



  productName:string ="";



  ngOnInit(): void{

    console.log('ngOnInit')

    this.http.get('http://localhost:3000/products').subscribe(( res:any)=>{

      this.products = res;

      console.log(res);

  }) ;

  }



}
