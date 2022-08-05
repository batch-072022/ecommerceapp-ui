import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  onSubmit(){
    alert("Successfully Registered");
    localStorage.setItem("IS_REG", "true");
    localStorage.setItem("ROLE","USER");
  }
}
