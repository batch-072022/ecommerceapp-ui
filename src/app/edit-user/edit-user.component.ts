import { identifierName } from '@angular/compiler';
import {OnInit,Component } from '@angular/core';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { GetdataService } from '../services/getuserdata.service';
import { UpdateuserdataService } from '../services/updateuserdata.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  id: any;

 




  constructor(private http:HttpClient ,private route:ActivatedRoute) {

    this.id = this.route.snapshot.params["id"];

  }



  ngOnInit(): void {

    console.log("edit user:" + this.id);

    this.edituser(this.id);

  }

user:any;

edituser(id:number){

  const url=" https://ecommerce-apii.herokuapp.com/users/"+id;

  this.http.get(url).subscribe((res:any)=>{

    this.user=res;

  })

}





}