import { Component } from '@angular/core';
import { GetdataService } from './services/getdata.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecommerceapp-ui';
  users:any;
  constructor(private userData:GetdataService)
  {
    this.userData.users().subscribe((data)=>{
      this.users=data;
    })
  }
}
