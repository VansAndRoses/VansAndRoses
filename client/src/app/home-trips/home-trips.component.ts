import { Component, OnInit } from '@angular/core';
import { TripService } from '../services/trip.service';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-home-trips',
  templateUrl: './home-trips.component.html',
  styleUrls: ['./home-trips.component.css']
})
export class HomeTripsComponent implements OnInit {
  title: string = 'My first AGM project';
  lat: number = 43.291657;
  lng: number = -2.995438;
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
