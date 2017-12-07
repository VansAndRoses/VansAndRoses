import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any;
  formInfo = {
    username: '',
    password: ''
  };
  error: string;
  constructor(private auth: AuthService, private router : Router) { }


  ngOnInit() {
  }

  login() {
      this.auth.login(this.formInfo.username, this.formInfo.password)
        .subscribe(
          (user) => this.successCb(user),
          (err) => this.errorCb(err)
        );

    }

    errorCb(err) {
      this.error = err;
      this.user = null;
    }

    successCb(user) {
      this.user = user;
      this.error = null;
      this.router.navigate(['/profile'])
    }
  }
