import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { environment }  from '../../environments/environment';
const  BASE_URL = 'http://localhost:3000';

@Injectable()
export class UserService {
  private headers = new Headers({ 'Content-type' : 'application/json' });
  private options = new RequestOptions ({headers: this.headers, withCredentials:true });

  constructor(private http: Http) {
  }

  profileGet(){
    return this.http.get(`${BASE_URL}/user/profile`, this.options)
    .map(res => res.json());
  }

  profileIdGet(id) {
    return this.http.get(`${BASE_URL}/user/profile/${id}`,this.options)
      .map(res => res.json())
  }

  editGet(id) {
    return this.http.get(`${BASE_URL}/user/${id}/edituser`,this.options)
      .map(res => res.json())
  }

editPost(id) {
    return this.http.post(`${BASE_URL}/user/${id}/edituser`,this.options)
      .map(res => res.json())
  }
}
