import { Component, OnInit } from '@angular/core';
import { TripService } from '../services/trip.service';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-home-trips',
  templateUrl: './home-trips.component.html',
  styleUrls: ['./home-trips.component.css']
})
export class HomeTripsComponent implements OnInit {
listTrips:Object;
  constructor(private listTripService : TripService) { }

  ngOnInit() {
    this.listTripService.getTripList()
      .subscribe(trips => console.log(trips))
  }

}
