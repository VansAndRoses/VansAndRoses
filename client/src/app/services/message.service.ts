import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { environment }  from '../../environments/environment';
const  BASE_URL = 'http://localhost:3000/';

@Injectable()
export class MessageService {


  message:any;
  options : {withCredentials:true };
  constructor(private http: Http) {
  }

  messageGet(){
    return this.http.get(`${BASE_URL}/api/message/`, this.options)
    .map(res => res.json());
  }

  newMessageGet(id){
    return this.http.get(`${BASE_URL}/api/message/${id}/new`, this.options)
     .map(res => res.json());
  }

  newMessagePost(id) {
    return this.http.post(`${BASE_URL}/api/message/${id}/new`,this.options)
      .map(res => res.json())
  }
}
