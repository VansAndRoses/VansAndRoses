import { Component, OnInit } from '@angular/core';
import { TripService } from '../services/trip.service';
import { Router } from '@angular/router';
// import { FileUploader} from "ng2-file-upload";

@Component({
  selector: 'app-new-trip',
  templateUrl: './new-trip.component.html',
  styleUrls: ['./new-trip.component.css']
})
export class NewTripComponent implements OnInit {
  // uploader: FileUploader = new FileUploader({
  //     url: 'http://localhost:3000/api/new-itineration/'
  //   });

  constructor(private newTripService : TripService, public router:Router) { }

  ngOnInit() {

  }
tripform (data) {
  console.log("lo que envio a mi servicio")
  console.log(data.value)
  this.newTripService.newTrip(data.value)
    .subscribe(trips => {
      this.router.navigate(['/new-itineration',trips.id]);
      console.log(trips.id)
      console.log(trips)
    })
    // this.uploader.uploadAll();
    // this.uploader.onCompleteItem=  () => console.log("hecho")

}

}
