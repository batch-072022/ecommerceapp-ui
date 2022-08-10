import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../services/getdata.service';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class ListUsersComponent implements OnInit {
  users:any;
  constructor(private userData:GetdataService)
  {
    this.userData.users().subscribe((data)=>{
      this.users=data;
    })
  }

  ngOnInit(): void {
  }
}