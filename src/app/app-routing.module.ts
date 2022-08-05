import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlockUserComponent } from './block-user/block-user.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'access', component: BlockUserComponent},
  {path:'', redirectTo:'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
