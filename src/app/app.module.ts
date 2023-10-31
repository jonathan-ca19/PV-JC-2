import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NoPagesFoundComponent } from './no-pages-found/no-pages-found.component';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { WebRoutingModule } from './web/web-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NoPagesFoundComponent,
  ],
  imports: [
    BrowserModule,
    AuthRoutingModule,
    AppRoutingModule,
    WebRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
