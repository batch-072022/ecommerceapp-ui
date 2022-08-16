import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategorySearchComponent } from './category-search/category-search.component';
import { DeleteproductComponent } from './deleteproduct/deleteproduct.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { ListSellersComponent } from './list-sellers/list-sellers.component';
import { SearchBrandComponent } from './search-brand/search-brand.component';
import { SearchByPriceRangeComponent } from './search-by-price-range/search-by-price-range.component';
import { SearchByPricePipe } from './search-by-price.pipe';

const routes: Routes = [
    {path:'list-sellers',component:ListSellersComponent},
    {path:'delete', component:DeleteproductComponent},
    {path:'listproducts',component:ListProductsComponent},
    {path:'searchBrand',component:SearchBrandComponent},
    {path:'categorysearch',component:CategorySearchComponent},
    {path:'searchbyprice',component:SearchByPriceRangeComponent},
    {path:'searchByPrice',component:SearchByPricePipe}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
