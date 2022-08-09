import { Component, OnInit } from '@angular/core';
import axios from "axios";
import { HttpClient } from '@angular/common/http';
import { NgForOf, NgIf } from '@angular/common';
import { EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  constructor(private http:HttpClient) { 

  }

  ngOnInit(): void {
    this.getUsers()
  }

  onClick() {
    alert("Password Reset Successfull");
  }

  user = {
    name: "",
    email: "",
    password: ""
  }
  
  users!:any[]
  getUsers(){
    //const url = " https://ecommerce-apii.herokuapp.com/users";
    const url = "http://localhost:3000/users";
    this.http.get(url).subscribe ((res:any)=>{
      this.users = res;
    })
  }

  register() {
    console.log("Name:" + this.user.name + ", email:" + this.user.email + ", password:" + this.user.password);

    try {
      if (this.user.name == null || this.user.name == "") {
        throw new Error("Name cannot be empty");
      }
      if (this.user.email == null || this.user.email == "") {
        throw new Error("Email cannot be empty");
      }
      if (this.user.password == null || this.user.password == "") {
        throw new Error("Password cannot be empty");
      }

      for(let user of this.users){
        if (user.email==this.user.email){
          throw new Error("Email Already Registered");
        }
      }

      console.log("Validation Success.")

    
    const userObj = { "name": this.user.name, "email": this.user.email, "password": this.user.password, "role": "USER", "status": "ACTIVE"};
    console.log(userObj);
  
    //const url = "https://ecommerce-apii.herokuapp.com/users";
    const url = "http://localhost:3000/users";
    axios.post(url, userObj).then((res: any) => {
      console.log("Response:", res.data);
      alert("Registration Successful");
    });
  }catch(err: any) {
    console.error("Error:" + err.message);
    alert(err.message);
  }
  }
}
