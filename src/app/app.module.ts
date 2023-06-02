import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './Shared/angular-material/angular-material.module';
import { NavMenuComponent } from './Layout/nav-menu/nav-menu.component';
import { HomeComponent } from './Pages/home/home/home.component';
import { MeteoComponent } from './Pages/Components/meteo/meteo.component';
import { HttpClientModule } from '@angular/common/http';
import { ProjetComponent } from './Pages/Components/projet/projet.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    MeteoComponent,
    ProjetComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
