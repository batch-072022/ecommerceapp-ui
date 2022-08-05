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
  const url="http://localhost:3000/useraccess";

  this.http.get(url).subscribe((res:any)=>{
  this.useraccess = res;
   
  })
 }

 Blocked(user:any){
  const url="http://localhost:3000/useraccess/"+user.id;
let userObj= {id:user.id,blocked:"BLOCKED"}
  this.http.patch(url,userObj).subscribe((res:any)=>{
  this.useraccess = res;
  alert("User is Blocked");
   
  })
 }

 Unblocked(user:any){
  const url="http://localhost:3000/useraccess/"+user.id;
  let userObj= {id:user.id,blocked:"ACTIVE"}
  this.http.patch(url,userObj).subscribe((res:any)=>{
  this.useraccess = res;
  alert("User is Un-Blocked");
  })



 }
 
}
