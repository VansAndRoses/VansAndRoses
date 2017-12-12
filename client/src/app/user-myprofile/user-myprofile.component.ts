import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth-user.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-myprofile',
  templateUrl: './user-myprofile.component.html',
  styleUrls: ['./user-myprofile.component.css']
})
export class UserMyprofileComponent implements OnInit {
  user:object;
  myTrips:object;
    constructor(public auth:AuthService, public userProfile: UserService) {

    }
  ngOnInit() {
    this.user = this.auth.getUser();
    this.userProfile.profileGet().subscribe(trips => {this.myTrips = trips.result})

  }
}
