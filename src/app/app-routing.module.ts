import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListUsersComponent } from './account/account.component';

const routes: Routes = [
  {path:"home", component: HomeComponent},
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'account',component:ListUsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
