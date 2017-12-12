import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { environment }  from '../../environments/environment';
const  BASE_URL = 'http://localhost:3000';

@Injectable()
export class ReviewService {


  message:any;
  options : {withCredentials:true };
  constructor(private http: Http) {
  }

  newReviewGet(id){
    return this.http.get(`${BASE_URL}/review/${id}/new`, this.options)
    .map(res => res.json());
  }

  newReviewPost(review, id) {
    return this.http.post(`${BASE_URL}/review/${id}/new`, review, this.options)
      .map(res => res.json())
  }
}
