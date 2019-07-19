import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MasterLibAppModule } from 'master-lib'
import { SalesLibAppModule } from 'sales-lib'

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MasterLibAppModule,
    SalesLibAppModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
