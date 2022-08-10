import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
  id: any;
  


  constructor(private http:HttpClient ,private route:ActivatedRoute) { 
    this.id = this.route.snapshot.params["id"];
  }

  ngOnInit(): void {
    console.log("view user:" + this.id);
    this.viewuser(this.id);
  }
user:any;
viewuser(id:number){
  const url=" https://ecommerce-apii.herokuapp.com/users/"+id;
  this.http.get(url).subscribe((res:any)=>{
    this.user=res;
  })
}
}
