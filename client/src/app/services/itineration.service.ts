import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { environment }  from '../../environments/environment';
const  BASE_URL ="http//localhost:3000"
@Injectable()
export class ItinerationService {


  options : {withCredentials:true };
  constructor(private http: Http) {
  }

  getItinerationList(){
    return this.http.get(`${BASE_URL}/api/itineration`, this.options)
    .map(res => res.json());
  }

  newItineration(itinerations) {
    return this.http.post(`${BASE_URL}/api/itineration/new-tineration`, itinerations, this.options)
      .map(res => res.json())
  }

  getItinerationDetails(id){
    return this.http.get(`${BASE_URL}/api/itineration/single/${id}`, this.options)
     .map(res => res.json());
  }

  //Remove y Edit
  edit(id,itineration) {
    return this.http.put(`${BASE_URL}/api/itineration/single/${id}/edit`, itineration, this.options)
     .map((res) => res.json());
  }
  delete(id){
    return this.http.delete(`${BASE_URL}/api/itineration/single/${id}/delete`,this.options)
     .map((res) => res.json());
  }

  }
