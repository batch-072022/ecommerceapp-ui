import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm !: FormGroup;

  constructor(private formBuilder:FormBuilder,private http: HttpClient,private router : Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:[''],
      password:['']
    })
  
  }
  login(){
      this.http.get<any>("https://ecommerce-apii.herokuapp.com/users")
       .subscribe((res: any[])=>{
         const user1 = res.find((a:any)=>{
           return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
         });
         if(user1){
              alert("Login Success!!");
                 
               }else{
                alert("user not found");
               }
             })
}
}
