import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { environment }  from '../../environments/environment';
@Injectable()
export class TripService {

 BASE_URL ="http://localhost:3000/api"

  options : {withCredentials:true };
  constructor(private http: Http) {
  }

  getTripList(){
    return this.http.get(`${this.BASE_URL}/trip`, this.options)
    .map(res => res.json());
  }

  newTrip(trip) {
    console.log("esto estoy pasando a mi servicio")
    console.log(trip)
    return this.http.post(`${this.BASE_URL}/trip/new-trips`, {}, this.options)
      .map(res => res.json())
  }

  getTripDetails(id){
    return this.http.get(`${this.BASE_URL}/trip/single/${id}`, this.options)
     .map(res => res.json());
  }

  //Remove y Edit
  edit(id,trip) {
    return this.http.put(`${this.BASE_URL}/trip/single/${id}/edit`, trip, this.options)
     .map((res) => res.json());
  }
  delete(id){
    return this.http.delete(`${this.BASE_URL}/trip/single/${id}/delete`,this.options)
     .map((res) => res.json());
  }


}
