import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteproductComponent } from './product/deleteproduct/deleteproduct.component';
import { HomeComponent } from './home/home.component';
import { ListSellersComponent } from './product/list-sellers/list-sellers.component';

const routes: Routes = [
  {path:'list-sellers',component:ListSellersComponent},
  {path:'home', component: HomeComponent},  
  {path:'', redirectTo:'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
