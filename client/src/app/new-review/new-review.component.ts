import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../services/review.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Http, Response, RequestOptions, Headers } from '@angular/http';


@Component({
  selector: 'app-new-review',
  templateUrl: './new-review.component.html',
  styleUrls: ['./new-review.component.css']
})
export class NewReviewComponent implements OnInit {
  review:any;

  constructor(private newReviewService : ReviewService, private route: ActivatedRoute, public router:Router) { }

  ngOnInit() {
  }

  newReviewPost (data) {
    console.log("lo que envio a mi servicio")
    console.log(data.value)
    this.route.params
      .subscribe((params) => {
        console.log("parametro de viaje")
        console.log('-----',params,params.id);
    this.newReviewService.newReviewPost(data.value, params.id)
      .subscribe(review => {
        this.review = review
        this.router.navigate(['/single',params.id]);
        console.log(review.id)
        console.log(review)
      });
    })
  }



}
