import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AppService } from '../app.service';



@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})



export class InsertComponent implements OnInit {

  form: FormGroup;

  responseJson : any = [];


  constructor(public appService: AppService) { }

  ngOnInit() {

  }

  register(form) {
    console.log(form.value); 
    this.tryConnect(form.value)
  }

  tryConnect(j : JSON) {
      
      this.appService.postSimpleLog(j)
        .subscribe(resp => {
          this.responseJson = [];
          this.responseJson.push(resp);
          console.log(resp, "res");
          
        },
          error => {
            console.log(error, "error");
          })
   }

}
