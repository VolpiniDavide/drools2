import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http : HttpClient) { }

  baseUrl = 'http://localhost:8080/proto-drools';

  getSimpleRun(){
    return  this.http.get(this.baseUrl + '/runNew');
   }

   postSimpleLog(j : JSON){
    return  this.http.post(this.baseUrl + '/insertnew', j );
   }

   check(min : number){
    return  this.http.get(this.baseUrl + '/check?min=' + min );
   }

   loadAllInGivenDay(d : Date){
    return  this.http.get(this.baseUrl + '/loadAllInGivenDate?date=' + d );
   }

   runExample(){
    return  this.http.get(this.baseUrl + '/runNew' );
   }

   stopExample(){
    return  this.http.get(this.baseUrl + '/stopNew' );
   }
}
