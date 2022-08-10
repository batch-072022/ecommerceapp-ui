import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChangepriceComponent } from './changeprice/changeprice.component';


const routes: Routes = [

  {path:'home', component: HomeComponent},
  {path:'', redirectTo:'home', pathMatch:'full'},
 
  {path:'changeprice', component:ChangepriceComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
