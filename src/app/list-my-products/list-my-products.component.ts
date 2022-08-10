import { HttpClient } from '@angular/common/http';

import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({

  selector: 'app-list-my-products',

  templateUrl: './list-my-products.component.html',

  styleUrls: ['./list-my-products.component.css']

})

export class ListMyProductsComponent implements OnInit {

  id!:number;


  constructor(private route:ActivatedRoute,private http: HttpClient) {  

    this.id = this.route.snapshot.params["id"]; 

  }



  ngOnInit(): void {

    console.log("My Product:" + this.id);

    this.getproduct();

  }



  products:any;



  getproduct(){

    const url = "http://localhost:3000/products/" + this.id;

   this.http.get(url).subscribe(( res:any)=>{

    this.products = res;

   }) ;

  }



  addToCart(products:any){

    console.log("Placing an order", products);

    let quantity = 1;

    let totalPrice = products.price * quantity;

    

    let orderObj = {

      item_name : products.brand + "-" + "-" + products.id,

      quantity: quantity,

      total_price: totalPrice,

      ordered_date : new Date().toJSON(),

      status:"ORDERED"

    };

    console.log(orderObj);



    const url = "http://localhost:3000/myorders";

    this.http.post(url, orderObj).subscribe( (res:any)=>{

      console.log(res);

      alert("Successfully Placed an Order");

    });




  }

}