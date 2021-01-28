import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor( private http: HttpClient) { }

  getWeather(location:any){
    return this.http.get(
        'http://api.weatherstack.com/current?access_key=f8314b03ddc45b5b4641e7874ad97a1c&query=' + location
    );
}
}
