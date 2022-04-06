import { BagesComponent } from './material/bages/bages.component';
import { IconComponent } from './material/icon/icon.component';
import { ButtonComponent } from './material/button/button.component';
import { HeadingComponent } from './material/typography/heading.component';
import { MaterialModule } from './material/material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonToggleComponent } from './material/button-toggle/button-toggle.component';
import { SpinnerComponent } from './material/spinner/spinner.component';


@NgModule({
  declarations: [
    AppComponent,
    HeadingComponent,
    ButtonComponent,
    ButtonToggleComponent,
    IconComponent,
    BagesComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
