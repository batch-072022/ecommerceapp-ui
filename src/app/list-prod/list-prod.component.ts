import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../services/getdetails.service';

@Component({
  selector: 'app-list-prod',
  templateUrl: './list-prod.component.html',
  styleUrls: ['./list-prod.component.css']
})
export class ListProdComponent implements OnInit {
products:any;
  constructor(private userData:GetdataService) { 
    this.userData.account().subscribe((data)=>{
      this.products=data;
    })
  }
  ngOnInit(): void {
  }
  deleteUser()
  {
    alert("Successfully deleted");
  }
}