import { DataTableComponent } from './material/data-table/data-table.component';
import { DialogExampleComponent } from './material/dialog-example/dialog-example.component';
import { SnackbarComponent } from './material/snackbar/snackbar.component';
import { DateRangeComponent } from './material/date-range/date-range.component';
import { AutocompleteComponent } from './material/autocomplete/autocomplete.component';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './material/menu/menu.component';
import { ListComponent } from './material/list/list.component';
import { GridListComponent } from './material/grid-list/grid-list.component';
import { ExpansionPanelComponent } from './material/expansion-panel/expansion-panel.component';
import { CardComponent } from './material/card/card.component';
import { TabsComponent } from './material/tabs/tabs.component';
import { StepperComponent } from './material/stepper/stepper.component';
import { InputComponent } from './material/input/input.component';
import { SelectComponent } from './material/select/select.component';
import { CRButtonComponent } from './material/CR-button/CR-button.component';
import { DateComponent } from './material/date/date.component';
import { CommonModule } from '@angular/common';
import { TooltipComponent } from './material/tooltip/tooltip.component';
import { DialogComponent } from './material/dialog/dialog.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
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
    ListComponent,
    GridListComponent,
    ExpansionPanelComponent,
    CardComponent,
    TabsComponent,
    StepperComponent,
    InputComponent,
    SelectComponent,
    AutocompleteComponent,
    CRButtonComponent,
    DateComponent,
    DateRangeComponent,
    TooltipComponent,
    SnackbarComponent,
    DialogComponent,
    DataTableComponent,
   ],
  entryComponents: [DialogExampleComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    ScrollingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: true,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable: 30000'
    }),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
