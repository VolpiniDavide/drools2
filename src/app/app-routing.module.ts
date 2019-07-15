import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SemaforoComponent } from './semaforo/semaforo.component';
import {InsertComponent} from './insert/insert.component';
import {LogHistoryTableComponent} from './log-history-table/log-history-table.component';


const appRoutes: Routes = [
  { path: 'semaforo', component: SemaforoComponent },
  { path: 'insert', component: InsertComponent },
  { path: 'lohHistoryTable', component: LogHistoryTableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
