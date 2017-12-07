import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user: any;
  formInfo = {
    username: '',
    password: '',
  };
  error: string;

  constructor(private auth: AuthService, private router : Router) {};

  ngOnInit() {
  }

  signup() {
  this.auth.signup(this.formInfo.username, this.formInfo.password)
    .subscribe(
      (user) => this.successCb(user),
      (err) => this.errorCb(err)
    );
    this.router.navigate(['/user/login'])
  }

errorCb(err) {
  this.error = err;
  this.user = null;
}

successCb(user) {
  this.user = user;
  this.error = null;
}
}
