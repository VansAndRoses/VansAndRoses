import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth-user.service';

@Component({
  selector: 'app-user-myprofile',
  templateUrl: './user-myprofile.component.html',
  styleUrls: ['./user-myprofile.component.css']
})
export class UserMyprofileComponent implements OnInit {
  user:object;
    constructor(public auth:AuthService) {
      this.user = this.auth.getUser();
      this.auth.getLoginEventEmitter()
          .subscribe( user => this.user=user );
    }
  ngOnInit() {
  }

}
