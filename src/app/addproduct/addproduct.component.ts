import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  http: any;

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.getproducts();
  }
  products:any;
  title = 'ecommerceapp ui';
  searchText: any;
  getproducts() {
    const url = "http://localhost:3000/products";

    this.http.get(url).subscribe ((res:any)=> {
      this.products = res;
    })
  }
Adding()
{
  alert("successfully Updated");

  this.router.navigateByUrl('/addproduct');
}
}
