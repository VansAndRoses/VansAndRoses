import { Component, OnInit } from '@angular/core';
import { ItinerationService } from '../services/itineration.service';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-new-itineration',
  templateUrl: './new-itineration.component.html',
  styleUrls: ['./new-itineration.component.css']
})
export class NewItinerationComponent implements OnInit {

  constructor(private newItinerationService : ItinerationService) { }

  ngOnInit() {
  }
  itinerationform(data) {
    console.log("lo que envio a mi servicio")
    console.log(data.value)
    this.newItinerationService.newItineration(data.value)
      .subscribe(trips => console.log(trips))
  }
}
