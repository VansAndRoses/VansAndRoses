import { Component, OnInit } from '@angular/core';
import { TripService } from '../services/trip.service';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-home-trips',
  templateUrl: './home-trips.component.html',
  styleUrls: ['./home-trips.component.css']
})
export class HomeTripsComponent implements OnInit {
  // google maps zoom level
  zoom: number = 6;

  // initial center position for the map
  lat: number = 40.336128;
  lng: number = -3.764483;

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }

  markers = [
	  {
		  lat: 40.336128,
		  lng: -3.764483,
		  label: 'A',
		  draggable: true
	  },
	  {
		  lat: 43.291619,
		  lng: -2.995482,
		  label: 'B',
		  draggable: false
	  }
  ]

listTrips:Object;
options = ['Surf','Snow','Climbing', 'Trekking', 'Bicycle', 'Gastronomy', 'Tourism', 'Others']
options2 = ['Andalucía','Aragón','Asturias', 'Baleares', 'Canarias', 'Cantabria', 'Castilla La Mancha', 'Cataluña', 'Extremadura', 'Galicia', 'La Rioja', 'Región de Murcia', 'Comunidad foral de Navarra', 'País Vasco', 'Comunidad Valenciana', 'Ceuta','Melilla']
  constructor(private listTripService : TripService) { }

  ngOnInit() {
    this.listTripService.getTripList()

      .subscribe(trips => {
        this.listTrips = trips;
        console.log(trips);
          })
  }

}
