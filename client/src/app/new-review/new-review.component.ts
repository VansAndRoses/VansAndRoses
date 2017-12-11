import { Component, OnInit } from '@angular/core';
import { ItinerationService } from '../services/itineration.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new-review',
  templateUrl: './new-review.component.html',
  styleUrls: ['./new-review.component.css']
})
export class NewReviewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  //
  // tripform (data) {
  //   console.log("lo que envio a mi servicio")
  //   console.log(data.value)
  //   this.newTripService.newTrip(data.value)
  //     .subscribe(trips => {
  //       this.router.navigate(['/new-itineration',trips.id]);
  //       console.log(trips.id)
  //       console.log(trips)
  //     })
  //
  // }

}
