import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListProdComponent } from './list-prod/list-prod.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'list-prod', component:ListProdComponent},
  {path:'', redirectTo:'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
