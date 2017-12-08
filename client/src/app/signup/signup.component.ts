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
  username:"",
  password:""
}
  constructor(public auth:AuthService) { }

  ngOnInit() {
  }

  signup(){
    const {username, password} = this.formInfo;
    if(username != "" && password != ""){
      console.log(`Signup with ${username} ${password}`)
      this.auth.signup(username, password)
      .map(user => console.log(user))
      .subscribe();
    } else{
      console.log("You must set a username and a password");
    }
  }

}
