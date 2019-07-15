import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SemaforoComponent } from './semaforo/semaforo.component';
import { InsertComponent } from './insert/insert.component';
import { NgForm } from '@angular/forms';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { LogHistoryTableComponent } from './log-history-table/log-history-table.component';



@NgModule({
  declarations: [
    AppComponent,
    SemaforoComponent,
    LogHistoryTableComponent,
    InsertComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
