import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewUserComponent } from './view-user/view-user.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ListUsersComponent } from './list-users/list-users.component';

const routes: Routes = [
  {path:'users/:id', component: ViewUserComponent},
  {path:'listusers', component: ListUsersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
