import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ListProductsComponent } from './list-products/list-products.component';
import { BrandPipe } from './brand.pipe';
import { MyProductsComponent } from './my-products/my-products.component';
import { ProductPipe } from './product.pipe';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ListProductsComponent,
    MyProductsComponent,
    BrandPipe,
    MyProductsComponent,
    ProductPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
