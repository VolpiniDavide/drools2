import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-log-history-table',
  templateUrl: './log-history-table.component.html',
  styleUrls: ['./log-history-table.component.css']
})
export class LogHistoryTableComponent implements OnInit {

  x : any ;
  form: FormGroup;
  responseJson : any = [];

  constructor(public appService: AppService) { }

  ngOnInit() {
  }

  loadall(){

    this.x = (document.forms["myForm"]["date"].value);
    this.appService.loadAllInGivenDay(this.x)
    .subscribe(resp => {
        this.responseJson =resp;

      console.log(this.responseJson, "res");
    });

    
  }



}

