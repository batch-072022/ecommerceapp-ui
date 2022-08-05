import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-block-user',
  templateUrl: './block-user.component.html',
  styleUrls: ['./block-user.component.css']
})
export class BlockUserComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.getUseraccess();
  }

  useraccess:any;
 getUseraccess(){
  const url="https://ecommerce-apii.herokuapp.com/users";

  this.http.get(url).subscribe((res:any)=>{
  this.useraccess = res;
   
  })
 }
 user:any;
 Blocked(user:any){
  const url="https://ecommerce-apii.herokuapp.com/users"+user.id;
let userObj= {id:user.id,status:"BLOCKED"}
  this.http.patch(url,userObj).subscribe((res:any)=>{
  //this.useraccess = res;
  alert("User is Blocked");
   
  })
 }
 getUsers(){
 const url = "https://ecommerce-apii.herokuapp.com/users";
    this.http.get(url).subscribe ((res:any)=>{
      this.user = res;
    })

  }

 

 Unblocked(user:any){
  const url="https://ecommerce-apii.herokuapp.com/users"+user.id;
  let userObj= {id:user.id,status:"ACTIVE"}
  this.http.patch(url,userObj).subscribe((res:any)=>{
 // this.useraccess = res;
  alert("User is Un-Blocked");
  })



 }
 
}
