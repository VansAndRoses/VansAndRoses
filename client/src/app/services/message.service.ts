import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { environment }  from '../../environments/environment';
const  BASE_URL = environment.BASE_URL;

@Injectable()
export class MessageService {
  private headers = new Headers({ 'Content-type' : 'application/json' });
  private options = new RequestOptions ({headers: this.headers, withCredentials:true });

  message:any;

  constructor(private http: Http) {
  }

  messageGet(){
    return this.http.get(`${BASE_URL}/message/`, this.options)
    .map(res => res.json());
  }

  newMessagePost(message, id) {
    return this.http.post(`${BASE_URL}/message/${id}/new`, message, this.options)
      .map(res => res.json())
  }
}
