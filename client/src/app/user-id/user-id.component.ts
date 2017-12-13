import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-id',
  templateUrl: './user-id.component.html',
  styleUrls: ['./user-id.component.css']
})
export class UserIdComponent implements OnInit {
  user:object;
  myTrips:object;
  constructor(public userIdProfile: UserService, private route : ActivatedRoute , private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe((params) => {
        this.userIdProfile.profileIdGet(params.id)
          .subscribe( res => {
            console.log(res)
            this.user = res.user;
            this.myTrips = res.trip;
          })
        })
  }

}
