import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteproductComponent } from './product/deleteproduct/deleteproduct.component';
import { HomeComponent } from './home/home.component';

import { LoginComponent } from './login/login.component';

import { RegisterComponent } from './register/register.component';
import { CreateMerchantComponent } from './create-merchant/create-merchant.component';




const routes: Routes = [
  {path:'home', component: HomeComponent},  
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path: 'create-merchant', component: CreateMerchantComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
