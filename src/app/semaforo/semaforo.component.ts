import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-semaforo',
  templateUrl: './semaforo.component.html',
  styleUrls: ['./semaforo.component.css']
})
export class SemaforoComponent implements OnInit {


  form: FormGroup;

  responseJson : any = [];


  constructor(public appService: AppService) { }

  ngOnInit() {
  }

  running = false;
  myVar;
  

   checkInterval(form) {
     this.running = true;
    console.log(form.value);
    var x = (document.forms["myForm"]["time"].value)*1000;
    this.check();
    this.myVar = setInterval(() => this.check(), x);
   }

    check(){
    var x = (document.forms["myForm"]["time"].value);
    this.appService.check(x)
    .subscribe(resp => {
      this.responseJson = [];
      this.responseJson.push(resp);
      console.log(resp, "res");
      
      var jsn = JSON.stringify(resp);

      var json = JSON.parse(jsn);

if(this.running == true ){
      if(json["alarmLevel"]==="GREEN"){
        this.illuminateGreen();
      }
      if(json["alarmLevel"]==="ORANGE"){
        this.illuminateOrange();
      }
      if(json["alarmLevel"]==="RED"){
        this.illuminateRed();
      }
    }
      
    },
      error => {
        console.log(error, "error");
      })
  }

  stopCheck() {
    clearInterval(this.myVar);
    this.clearLights();
    this.running = false;
  }

illuminateRed() {
  this.clearLights();
  document.getElementById('stopLight').style.backgroundColor = "red";
}

illuminateOrange() {
  this.clearLights();
  document.getElementById('slowLight').style.backgroundColor = "purple";
}

illuminateGreen() {
  this.clearLights();
  document.getElementById('goLight').style.backgroundColor = "green";
}

clearLights() {
  document.getElementById('stopLight').style.backgroundColor = "black";
  document.getElementById('slowLight').style.backgroundColor = "black";
  document.getElementById('goLight').style.backgroundColor = "black";
}

runExample(){
  this.appService.runExample()
    .subscribe();
}

stopExample(){
  this.appService.stopExample()
    .subscribe();
}

}
