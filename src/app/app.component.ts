import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'flex';
  color: string | undefined;
  fontSize: number | undefined;
//   userData:any =[
//     {name:"Sudheer", address:"USA", profilename:"Angular developer"},
//     {name:"Bhanu", address:"UK", profilename:"PHP developer"},
//     {name:"Suresh", address:"INDIA", profilename:".NET developer"},
//     {name:"Naveen", address:"SINGAPORE", profilename:"Angular developer"},
//   ]
//   // users: any;
//   constructor(){
//     console.log(this.userData);
//   }
//   getcurrentuser(user:any){
  
// // this.users=user;
//   }
apply(color: string, fontSize: number): void {  
  this.color = color;  
  this.fontSize = fontSize;  
}  
}
