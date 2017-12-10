import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
formInfo = {
  name:"",
  lastname:"",
  email:"",
  username:"",
  password:"",
  typeOfVan:""
}
  constructor(public auth:AuthService) { }

  ngOnInit() {
  }

  signup(formInfo){
    const {name,lastname,email,username,password,typeOfVan} = this.formInfo;
    if(username != "" && password != ""){
      console.log(`Signup with ${username} ${password}`)
      this.auth.signup(name,lastname,email,username,password,typeOfVan)
      .map(user => console.log(user))
      .subscribe(formInfo);
    } else{
      console.log("You must set a username and a password");
    }
  }

}
