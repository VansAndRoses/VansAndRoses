import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { environment }  from '../../environments/environment';
const  BASE_URL =environment.BASE_URL
@Injectable()
export class ItinerationService {


  options : {withCredentials:true };
  constructor(private http: Http) {
  }

  getItinerationList(){
    return this.http.get(`${BASE_URL}/api/itineration`, this.options)
    .map(res => res.json());
  }

  newItineration(itinerations, id) {
    console.log("esto estoy pasando a mi servicio")
    console.log(itinerations, id)
    return this.http.post(`${BASE_URL}/api/itineration/new-itineration/${id}`, itinerations, this.options)
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
