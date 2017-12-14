import { Component, OnInit } from '@angular/core';
import { TripService } from '../services/trip.service';
import { Router } from '@angular/router';
import { FileUploader} from "ng2-file-upload";

@Component({
  selector: 'app-new-trip',
  templateUrl: './new-trip.component.html',
  styleUrls: ['./new-trip.component.css']
})
export class NewTripComponent implements OnInit {
  uploader: FileUploader = new FileUploader({
      url: 'http://localhost:3000/api/trip/new-trips/'
    });

  constructor(private newTripService : TripService, public router:Router) { }

  ngOnInit() {

  }
  tripform (data) {
    this.uploader.onBuildItemForm = (item, form) => {
        form.append('title', data.value.title);
        form.append('description', data.value.description);
        form.append('category', data.value.category);
        form.append('duration', data.value.duration);
        form.append('location', data.value.location);
        form.append('locationOfStart', data.value.locationOfStart);
        form.append('locationOfEnd', data.value.locationOfEnd);
        form.append('options', data.value.options);
      };
    console.log("hago subida de archivos")
      this.uploader.uploadAll();
      this.uploader.onCompleteItem=  (a) =>  console.log(a); ;

    }
    }

// this.router.navigate(['/new-itineration',trips.id])
