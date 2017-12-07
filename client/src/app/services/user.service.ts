import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { environment }  from '../../environments/environment';
const  BASE_URL = 'http://localhost:3000/';

@Injectable()
export class UserService {


  user:any;
  options : {withCredentials:true };
  constructor(private http: Http) {
  }

  profileGet(id){
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
