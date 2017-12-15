import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { environment }  from '../../environments/environment';
const  BASE_URL = environment.BASE_URL;

@Injectable()
export class UserService {
  private headers = new Headers({ 'Content-type' : 'application/json' });
  private options = new RequestOptions ({headers: this.headers, withCredentials:true });

  constructor(private http: Http) {
  }

  profileGet(){
    return this.http.get(`${BASE_URL}/api/user/profile`, this.options)
    .map(res => res.json());
  }

  profileIdGet(id) {
    return this.http.get(`${BASE_URL}/api/user/profile/${id}`,this.options)
      .map(res => res.json())
  }

  editGet(id) {
    return this.http.get(`${BASE_URL}/api/user/${id}/edituser`,this.options)
      .map(res => res.json())
  }

editPost(id) {
    return this.http.post(`${BASE_URL}/api/user/${id}/edituser`,this.options)
      .map(res => res.json())
  }
}
