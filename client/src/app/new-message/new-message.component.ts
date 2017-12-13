import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.css']
})
export class NewMessageComponent implements OnInit {
  review:any;
  private headers = new Headers({ 'Content-type' : 'application/json' });
  private options = new RequestOptions ({headers: this.headers, withCredentials:true });
  
  constructor(private newMessageService : MessageService, private route: ActivatedRoute, public router:Router) { }

  ngOnInit() {
  }
  newReviewPost (data) {
    console.log("lo que envio a mi servicio")
    console.log(data.value)
    this.route.params
      .subscribe((params) => {
        console.log("parametro de viaje")
        console.log('-----',params,params.id);
    this.newMessageService.newMessagePost(data.value, params.id)
      .subscribe(review => {
        this.message = message
        this.router.navigate(['/single',params.id]);
        console.log(review.id)
        console.log(review)
      });
    })
  }

}
