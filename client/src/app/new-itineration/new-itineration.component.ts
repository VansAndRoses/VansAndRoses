import { Component, OnInit } from '@angular/core';
import { ItinerationService } from '../services/itineration.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-new-itineration',
  templateUrl: './new-itineration.component.html',
  styleUrls: ['./new-itineration.component.css']
})
export class NewItinerationComponent implements OnInit {
   itineration :any;
  constructor(private newItinerationService : ItinerationService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {

  }
  itinerationform(data) {

    console.log("lo que envio a mi servicio")
    console.log(data.value)
    this.route.params
      .subscribe((params) => {
        console.log("parametro de viaje")
        console.log('-----',params,params.id);
    this.newItinerationService.newItineration(data.value, params.id)
      .subscribe( itineration => {
        this.itineration = itineration
        this.router.navigate(['/single', params.id])
      });
      }
    );
    // this.newItinerationService.newItineration(data.value, id)
    //   .subscribe(trips => console.log(trips))

  }
}
