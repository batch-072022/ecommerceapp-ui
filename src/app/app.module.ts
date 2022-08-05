import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';


import { HomeComponent } from './home/home.component';
import { BlockUserComponent } from './block-user/block-user.component';
import { HttpClientModule } from '@angular/common/http';





@NgModule({

  declarations: [

    AppComponent,

    HeaderComponent,

    HomeComponent,
      BlockUserComponent,
      

  ],

  imports: [

    BrowserModule,

    AppRoutingModule,
   
    HttpClientModule,

      FormsModule,
    

  ],

  providers: [],

  bootstrap: [AppComponent]

})

export class AppModule { }
