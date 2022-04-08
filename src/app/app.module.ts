import { NavbarComponent } from './material/navbar/navbar.component';
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
import { TableComponent } from './material/table/table.component';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './material/menu/menu.component';
import { ListComponent } from './material/list/list.component';


@NgModule({
  declarations: [
    AppComponent,
    HeadingComponent,
    ButtonComponent,
    ButtonToggleComponent,
    IconComponent,
    BagesComponent,
    SpinnerComponent,
    NavbarComponent,
    TableComponent,
    MenuComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
