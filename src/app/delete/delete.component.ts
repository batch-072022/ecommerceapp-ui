import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-delete-cupon-code',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class ListUsersComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
  users=[
    {id:101, name:"abc",email:"3@gmail.com"},
    {id:102, name:"cde",email:"2@gmail.com"},
    {id:103, name:"ahfka",email:"1@gmail.com"}
  ];
  //ListTaskComponent
  tasks=[
    {id:1,name:"Install Java",status:"COMPLETED"},
    {id:2,name:"Install NodeJS",status:"PENDING"},
  ];
  deleteUser()
  {
    alert("Successfully deleted");
  }
}