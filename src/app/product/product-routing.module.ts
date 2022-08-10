import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteproductComponent } from './deleteproduct/deleteproduct.component';

const routes: Routes = [
    {path:'delete', component:DeleteproductComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
