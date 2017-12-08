import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  user: any;
  formInfo = {
    username: '',
    password: '',
    email: ''
  };
  error: string;
  constructor(private auth: AuthService, private router : Router) { }

  ngOnInit() {
    this.successCb(this.auth.user);
  }
  edit(){

    this.auth.edit(this.user._id, this.formInfo)
        .subscribe(
          (user) => this.successCb(user),
          (err) => this.errorCb(err)

        );
        this.router.navigate(['/'])
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
