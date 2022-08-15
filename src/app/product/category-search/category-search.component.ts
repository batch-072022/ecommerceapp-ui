import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-search',
  templateUrl: './category-search.component.html',
  styleUrls: ['./category-search.component.css']
})
export class CategorySearchComponent implements OnInit {
  title = 'ecommerceapp-ui';
  constructor(private http: HttpClient){
    console.log("categorysearchcomponent constructor")

  }ngOnInit(): void{
    this.searchcategory()
    console.log('ngOnInit');
  }

  products!: any[];
  categorysearch:string="";
  searchcategory(){
    this.http.get('http://localhost:3000/products').subscribe(( res:any)=>{
      this.products = res;
      console.log(res);
  });
  }
}
