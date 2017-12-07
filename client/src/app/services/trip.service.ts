import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { environment }  from '../../environments/environment';
const  BASE_URL ="http//localhost:3000"
@Injectable()
export class TripService {


  options : {withCredentials:true };
  constructor(private http: Http) {
  }

  getTripList(){
    return this.http.get(`${BASE_URL}/api/trip`, this.options)
    .map(res => res.json());
  }

  newTrip(trip) {
    return this.http.post(`${BASE_URL}/api/trip/new-trip`, trip, this.options)
      .map(res => res.json())
  }

  getTripDetails(id){
    return this.http.get(`${BASE_URL}/api/trip/single/${id}`, this.options)
     .map(res => res.json());
  }

  //Remove y Edit
  edit(id,trip) {
    return this.http.put(`${BASE_URL}/api/trip/single/${id}/edit`, trip, this.options)
     .map((res) => res.json());
  }
  delete(id){
    return this.http.delete(`${BASE_URL}/api/trip/single/${id}/delete`,this.options)
     .map((res) => res.json());
  }


}
