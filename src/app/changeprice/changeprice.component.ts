import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-changeprice',
  templateUrl: './changeprice.component.html',
  styleUrls: ['./changeprice.component.css']
})
export class ChangepriceComponent implements OnInit {
  http: any;

  constructor() { }

  ngOnInit(): void {
    this.getproducts();
  }
  products:any;

  title = "ecommerceapp ui";

  searchText: any;

  getproducts(){

    const url = " http://localhost:3000/products";

this.http.get(url).subscribe((res:any)=> {

this.products = res;

  })  
}
change(){
  alert("Successfully updated");
}
}