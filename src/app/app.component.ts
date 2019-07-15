import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppComponent]
})
export class AppComponent {
  title = 'tryConnection';

  data : any = [];

  constructor(public appService: AppService){}

  ngOnInit() {
   
  }
  /* method to call get-api from app.service */
  tryConnect() {
    try {
      this.appService.getSimpleRun()
        .subscribe(resp => {
          console.log(resp, "res");
          this.data = resp
        },
          error => {
            console.log(error, "error");
          })
    } catch (e) {
      console.log(e);
    }
  }

}
