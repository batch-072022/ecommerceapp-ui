import { Component, OnInit } from '@angular/core';
import axios from "axios";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  /*onSubmit() {
    alert("Successfully Registered");
    localStorage.setItem("IS_REG", "true");
    localStorage.setItem("ROLE", "USER");
    localStorage.setItem("STATUS", "ACTIVE");
  }*/

  onClick() {
    alert("Password Reset Successfull");
  }

  users = {
    name: "",
    email: "",
    password: ""
  }


  onSubmit(){
    alert("Registration Successful");
  }

  register() {
    console.log("Name:" + this.users.name + ", email:" + this.users.email + ", password:" + this.users.password);

    try {
      if (this.users.name == null || this.users.name == "") {
        throw new Error("Name cannot be empty");
      }
      if (this.users.email == null || this.users.email == "") {
        throw new Error("Email cannot be empty");
      }
      if (this.users.password == null || this.users.password == "") {
        throw new Error("Password cannot be empty");
      }
      console.log("Validation Success.")
    }catch(err: any) {
      console.error("Error:" + err.message);
    }
    
    const userObj = { "name": this.users.name, "email": this.users.email, "password": this.users.password, "role": "USER", "status": "ACTIVE"};
    console.log(userObj);
    
    /*usersGet(){
      const url = "https://ecommerce-apii.herokuapp.com/users";
      return get(url);
    }*/
    const url = "https://ecommerce-apii.herokuapp.com/users";
    //const url = "http://localhost:3000/users";
    axios.post(url, userObj).then((res: any) => {
      console.log("Response:", res.data);
      this.onSubmit()
    });
  }
}
