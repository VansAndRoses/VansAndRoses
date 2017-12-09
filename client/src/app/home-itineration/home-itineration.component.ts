import { Component, OnInit } from '@angular/core';
import { ItinerationService } from '../services/itineration.service';
import { Routes } from '@angular/router';
@Component({
  selector: 'app-home-itineration',
  templateUrl: './home-itineration.component.html',
  styleUrls: ['./home-itineration.component.css']
})
export class HomeItinerationComponent implements OnInit {
listItinerations:Object;
  constructor(private homeItinerationService : ItinerationService) { }

  ngOnInit() {
    this.homeItinerationService.getItinerationList()
      .subscribe(itinerations => this.listItinerations = itinerations)
  }

}
