import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteproductComponent } from './deleteproduct/deleteproduct.component';
import { ProductRoutingModule } from './product-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListSellersComponent } from './list-sellers/list-sellers.component';



@NgModule({
  declarations: [
    DeleteproductComponent,
    ListSellersComponent
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
