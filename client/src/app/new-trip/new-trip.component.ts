import { Component, OnInit } from '@angular/core';
import { TripService } from '../services/trip.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-trip',
  templateUrl: './new-trip.component.html',
  styleUrls: ['./new-trip.component.css']
})
export class NewTripComponent implements OnInit {

  constructor(private newTripService : TripService, public router:Router) { }

  ngOnInit() {

  }
tripform (data) {
  console.log("lo que envio a mi servicio")
  console.log(data.value)
  this.newTripService.newTrip(data.value)
    .subscribe(trips => {
      this.router.navigate(['/new-itineration',trips.id]);
      console.log(trips.id)
      console.log(trips)
    })

}

}
