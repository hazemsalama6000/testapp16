import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { of } from "rxjs";


@Injectable({ providedIn: 'root' })

export class employeeResolve implements Resolve<any>{

    constructor(private http:HttpClient){}

    resolve() {
      return this.getData();
    }

    getData(){
     return this.http.get('https://api.weatherbit.io/v2.0/current?lat=35.7796&lon=-78.6382&key=fa4d034c690d4b6ab106e8e8cd3a89be&include=minutely');
    }
/* 
    this.httpClient.get('https://api.weatherbit.io/v2.0/current?lat=35.7796&lon=-78.6382&key=fa4d034c690d4b6ab106e8e8cd3a89be&include=minutely').subscribe((data)=>{
        return data;
    }); */

}

