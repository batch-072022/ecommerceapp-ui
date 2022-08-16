import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search-by-price-range',
  templateUrl: './search-by-price-range.component.html',
  styleUrls: ['./search-by-price-range.component.css']
})
export class SearchByPriceRangeComponent implements OnInit {
  title = 'ecommerceapp-ui';
  constructor(private http: HttpClient){
    

  }
 
  products!: any[];



  SearchByPrice!: number;



  ngOnInit(): void{

    console.log('ngOnInit')

    this.http.get('http://localhost:3000/products').subscribe(( res:any)=>{

      this.products = res;

      console.log(res);

  }) ;

  }

}
