import { Component, OnInit, ɵɵi18nApply } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    alert("couponcode successfully deleted");

  }
  Delete()
  {
    alert("couponcode successfully deleted");
  }

}
