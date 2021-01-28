import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {APIService} from '../api.service';
@Component({
  selector: 'app-whether',
  templateUrl: './whether.component.html',
  styleUrls: ['./whether.component.css']
})
export class WhetherComponent implements OnInit {
  weather:any;
  public weatherData: any;

  constructor(private formBuilder: FormBuilder,private as:APIService) { }

  ngOnInit(): void {
    this.weather = this.formBuilder.group({
      location: ['']
    });
  }
  sendToAPIXU(formValues:any) {
    this.as
    .getWeather(formValues.location)
    .subscribe(data =>{ this.weatherData = data;
    console.log(this.weatherData);  });

}
}
