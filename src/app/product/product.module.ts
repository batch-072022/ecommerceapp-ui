import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { SearchBrandComponent } from './search-brand/search-brand.component';
import { BrandPipe } from '../brand.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
  
    SearchBrandComponent,
    BrandPipe
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule

    
  ]
})
export class ProductModule { }
