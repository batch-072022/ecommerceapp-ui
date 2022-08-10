import { HttpBackend, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deleteproduct',
  templateUrl: './deleteproduct.component.html',
  styleUrls: ['./deleteproduct.component.css']
})
export class DeleteproductComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getProducts()
  }
    users ! :any;
  // users = ["Harshil", "Sonu", "Don"];

  products!:any[];
  
  getProducts(){
    //const url ="https://ecommerce-apii.herokuapp.com/products"
    const url ="http://localhost:3000/products/"
    this.http.get(url).subscribe(( res:any)=>{
         this.products = res;
     }) ;
   }
  deleteproduct(id:number){
    const url ="http://localhost:3000/products/" +id;
    // alert("Successfully Deleted" +id);
    this.http.delete(url).subscribe((res:any)=>{
      console.log(res);
      alert("Successfully Deleted" +id);
  })


}


}
