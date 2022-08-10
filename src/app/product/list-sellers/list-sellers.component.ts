import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-sellers',
  templateUrl: './list-sellers.component.html',
  styleUrls: ['./list-sellers.component.css']
})
export class ListSellersComponent implements OnInit {

  constructor(private http: HttpClient) {

    console.log("ListProducts Component constructor");



  }



  ngOnInit(): void {

    console.log("Lifecycle Init method");

    this.getdetails();

  }



  details!:any[];



  title:string = "";



  getdetails(){

    const url = "https://ecommerce-apii.herokuapp.com/products";

    this.http.get(url).subscribe ( (res:any)=>{

      console.log(res);

      this.details = res;

    });

  }

}
