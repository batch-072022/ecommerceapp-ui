import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteproductComponent } from './deleteproduct/deleteproduct.component';
import { ProductRoutingModule } from './product-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { SearchBrandComponent } from './search-brand/search-brand.component';
import { BrandPipe } from '../brand.pipe';
import { ListSellersComponent } from './list-sellers/list-sellers.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { CategorySearchComponent } from './category-search/category-search.component';
import { CategorysearchPipe } from '../categorysearch.pipe';
import { SearchProductComponent } from './search-product/search-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DeleteproductComponent,
    SearchBrandComponent,
    ListSellersComponent,
    ListProductsComponent,
    BrandPipe,
    CategorySearchComponent,
    CategorysearchPipe,
    SearchProductComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class ProductModule { }
