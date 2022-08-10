import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListMyProductsComponent } from './list-my-products/list-my-products.component';
import { ListProductsComponent } from './list-products/list-products.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:"myproducts/:id",component:ListMyProductsComponent},
  {path:"listproducts",component:ListProductsComponent},
  {path:'', redirectTo:'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
