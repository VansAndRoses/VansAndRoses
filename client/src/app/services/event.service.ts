import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { environment }  from '../../environments/environment';
const  BASE_URL = environment.BASE_URL;

@Injectable()
export class EventService {


  event:any;
  options : {withCredentials:true };
  constructor(private http: Http) {
  }

  getAllList(){
    return this.http.get(`${BASE_URL}/api/event/`, this.options)
    .map(res => res.json());
  }

  createEvent(events) {
    return this.http.post(`${BASE_URL}/api/event/new`, events,this.options)
      .map(res => res.json())
  }

  singleEvent(id){
    return this.http.get(`${BASE_URL}/api/event/single/${id}`, this.options)
     .map(res => res.json());
  }


  //Remove y Edit
  editEvent(id,event) {
    return this.http.put(`${BASE_URL}/api/event/single/${id}/edit`,event, this.options)
     .map((res) => res.json());
  }
  removeEvent(id){
    return this.http.delete(`${BASE_URL}/api/event/single/${id}/edit`,this.options)
     .map((res) => res.json());
  }


}
