import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { Users } from '../users';

@Component({
  selector: 'app-rest',
  templateUrl: './rest.component.html',
  styleUrls: ['./rest.component.css']
})
export class RestComponent implements OnInit {
users:Users[]=[];
columns = ["User Id","First Name","Last Name", "Email", "Mobile", "Salary"];
index = ["id", "firstName", "lastName", "email", "mobile", "salary"];

  constructor( private rs:RestService) { }

  ngOnInit(): void {
    this.rs.getUsers().subscribe((Response)=>{
     this.users=Response;
    })
  }

}
