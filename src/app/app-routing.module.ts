import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
// import { ListSellersComponent } from './list-sellers/list-sellers.component';

const routes: Routes = [
  // {path:'listsellers',component:ListSellersComponent},
  {path:'home', component: HomeComponent},
  {path:'', redirectTo:'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
