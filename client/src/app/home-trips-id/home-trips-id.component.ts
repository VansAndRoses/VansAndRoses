import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { TripService } from '../services/trip.service';


@Component({
  selector: 'app-home-trips-id',
  templateUrl: './home-trips-id.component.html',
  styleUrls: ['./home-trips-id.component.css']
})
export class HomeTripsIdComponent implements OnInit {
compTrip : any;

  constructor(private tripService: TripService, private route : ActivatedRoute , private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe((params) => {
        console.log(params.id);
        this.tripService.getTripDetails(params.id)
          .subscribe( trip => {this.compTrip = trip
            console.log(trip);
          })


        })
  }
}
