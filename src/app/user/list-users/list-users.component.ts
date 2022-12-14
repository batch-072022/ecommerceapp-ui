import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.getUsers();
  }
  users:any;
  title = 'ecommerceapp-ui';
  searchText: any;
    getUsers(){
    const url = " https://ecommerce-apii.herokuapp.com/users";

    this.http.get(url).subscribe ((res:any)=>{
      this.users = res;
    })
    
  }
  user:any;
  Blocked(user:any){
   const url="https://ecommerce-apii.herokuapp.com/users/"+user.id;
 let userObj= {id:user.id,status:"BLOCKED"}
   this.http.patch(url,userObj).subscribe((res:any)=>{
   //this.useraccess = res;
   alert("User is Blocked");
    
   })
  }
  Unblocked(user:any){
    const url="https://ecommerce-apii.herokuapp.com/users/"+user.id;
    let userObj= {id:user.id,status:"ACTIVE"}
    this.http.patch(url,userObj).subscribe((res:any)=>{
   // this.useraccess = res;
    alert("User is Un-Blocked");
    })
  
  
  
   }
   

}
