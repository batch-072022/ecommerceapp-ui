import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchBySellerPipe } from './search-by-seller.pipe';
// import { ListSellersComponent } from './list-sellers/list-sellers.component';
// import { YearPipe } from './year.pipe';
// import { TitlePipe } from './title.pipe';
// import { EmailPipe } from './email.pipe';
// import { AuthorPipe } from './author.pipe';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchBySellerPipe,
    // ListSellersComponent,
    // YearPipe,
    // TitlePipe,
    // EmailPipe,
    // AuthorPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
