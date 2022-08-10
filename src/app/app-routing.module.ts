import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteproductComponent } from './deleteproduct/deleteproduct.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},

  {path:"login",component:LoginComponent},

  {path:'delete', component:DeleteproductComponent},

  {path:'', redirectTo:'home', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
