import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteproductComponent } from './deleteproduct/deleteproduct.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { SearchBrandComponent } from './search-brand/search-brand.component';

const routes: Routes = [
    {path:'delete', component:DeleteproductComponent},
    {path:'searchBrand',component:SearchBrandComponent},
    {path:'listproducts',component:ListProductsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
