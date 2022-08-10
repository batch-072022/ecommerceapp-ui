import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListcouponComponent } from './listcoupon/listcoupon.component';
import {AlertComponent} from './alert/alert.component';
const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'listcoupon', component: ListcouponComponent},
  {path:'alert',component:AlertComponent},
  {path:'', redirectTo:'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
