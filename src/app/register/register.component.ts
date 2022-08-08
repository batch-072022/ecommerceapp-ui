import { Component, OnInit } from '@angular/core';
import axios from "axios";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  public name!: string;
  public email!: string;
  public password!: string;
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

  register() {
    console.log("Name:" + this.name + ", email:" + this.email + ", password:" + this.password);

    try {
      if (this.name == null || this.name == "") {
        throw new Error("Name cannot be empty");
      }
      if (this.email == null || this.email == "") {
        throw new Error("Email cannot be empty");
      }
      if (this.password == null || this.password == "") {
        throw new Error("Password cannot be empty");
      }
      console.log("Validation Success.")
    }catch(err: any) {
      console.error("Error:" + err.message);
    }
    
    const userObj = { "name": this.name, "email": this.email, "password": this.password };
    console.log(userObj);

    const url = "https://ecommerce-apii.herokuapp.com/users";
    axios.post(url, userObj).then((res: any) => {
      console.log("Response:", res.data);
    });
  }
}
