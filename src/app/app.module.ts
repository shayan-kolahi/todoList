import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { HeaderComponent } from './components/header/header.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ShareModule} from "./module/share/share.module";
import { TooltipModule } from 'primeng/tooltip';
import {InputTextModule} from "primeng/inputtext";


@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ShareModule,
    TooltipModule,
    InputTextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
