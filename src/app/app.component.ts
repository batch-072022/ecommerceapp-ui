import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecommerceapp-ui';
  









  constructor(private http: HttpClient){

   



  }

 

  products!: any[];





  categorysearch:string="";





  ngOnInit(): void{



    console.log('ngOnInit')



    this.http.get('http://localhost:3000/products').subscribe(( res:any)=>{



      this.products = res;



      console.log(res);



  }) ;



  }

}
