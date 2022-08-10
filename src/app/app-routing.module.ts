import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { MyProductsComponent } from './my-products/my-products.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'listproducts',component:ListProductsComponent},
  {path:'myproducts',component:MyProductsComponent},
  {path:'', redirectTo:'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
