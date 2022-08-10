import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../services/getdata.service';
@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  users:any;
  constructor(private userData:GetdataService)
  {
    this.userData.users().subscribe((data)=>{
      this.users=data;
    })
  }
  Add(){

  }
  Update(){

  }
  Delete(){

  }
  ngOnInit(): void {
  }
}