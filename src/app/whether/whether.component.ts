import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import {APIService} from '../api.service';
@Component({
  selector: 'app-whether',
  templateUrl: './whether.component.html',
  styleUrls: ['./whether.component.css']
})
export class WhetherComponent implements OnInit {
  
  weather:any;
 weatherData: any;
  clr:any;
  bgColor:any;
 
  

  constructor(private formBuilder: FormBuilder,private as:APIService) { }

  ngOnInit(): void {
    this.weather = this.formBuilder.group({
      location: ['',[Validators.required,Validators.pattern('^[a-zA-Z \-\']+')] ]
    });
    // setTimeout(
    //   function(){ 
    //   location.reload(); 
    //   }, 60000);
  }
  sendToAPIXU(formValues:any) {
    this.as
    .getWeather(formValues.location)
    .subscribe(data =>{ this.weatherData = data;
    console.log(this.weatherData); 
    
    this.changecolor(this.weatherData.current.weather_descriptions)
  
 });

}
changecolor(item:any){
  debugger;
  switch(item[0]){
    case "Partly cloudy":
      this.bgColor="skyblue";
      this.clr="white";
      break;
      case "Haze":
      this.bgColor="orange";
      this.clr="white";
      break;
      case "Mist":
      this.bgColor="lightblue";
      this.clr="white";
      break;
      case "Cloudy":
        this.bgColor="darkblue";
        this.clr="white";
        break;
        case "Sunny":
        this.bgColor="red";
        this.clr="white";
        break;
        case "Patchy rain possible":
          this.bgColor="pink";
          this.clr="white";
  }
}
today: number = Date.now();


}
