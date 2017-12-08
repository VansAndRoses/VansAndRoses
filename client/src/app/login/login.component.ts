import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth-user.service';
import { Router } from '@angular/router';

interface LoginForm{
  username:string;
  password:string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formInfo:LoginForm = {
    username: "",
    password: ""
  };

  constructor(public auth:AuthService) { }

  ngOnInit() {
  }

  login(){
    const {username, password} = this.formInfo;
    if(username != "" && password != ""){
      console.log(`Login with ${username} ${password}`)
      this.auth.login(username, password)
      .map(user => console.log(user))
      .subscribe();

    } else{
      console.log("You must set a username and a password");
    }
  }

}
