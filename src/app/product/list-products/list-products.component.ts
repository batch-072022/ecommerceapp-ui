import { HttpClient } from '@angular/common/http';

import { Component, OnInit } from '@angular/core';




@Component({

  selector: 'app-list-products',

  templateUrl: './list-products.component.html',

  styleUrls: ['./list-products.component.css']

})

export class ListProductsComponent implements OnInit {

  constructor(private http: HttpClient) {

    console.log("ListProductsComponent constructor");

  }



  ngOnInit(): void {

    this.getproducts();

  }



  products!:any[];

  brand:string="";



  getproducts(){

    const url = "http://localhost:3000/products";
    

    this.http.get(url).subscribe((res:any)=>{
      
      console.log(res);
      
      this.products=res;
      

    });

    }

}