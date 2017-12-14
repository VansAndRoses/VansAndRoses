import { Component, OnInit } from '@angular/core';
import { ItinerationService } from '../services/itineration.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FileUploader} from "ng2-file-upload";

@Component({
  selector: 'app-new-itineration',
  templateUrl: './new-itineration.component.html',
  styleUrls: ['./new-itineration.component.css']
})
export class NewItinerationComponent implements OnInit {
  uploader: FileUploader;

  constructor(private newItinerationService : ItinerationService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params
         .subscribe((params) => {
           this.uploader = new FileUploader({
             url: 'http://localhost:3000/itineration/new-itineration/'+ params.id
           })
         })
  }
  itinerationform(data) {

    this.uploader.onBuildItemForm = (item, form) => {
        form.append('title', data.value.title);
        form.append('description', data.value.description);
        form.append('locationOfStart', data.value.locationOfStart);
        form.append('locationOfEnd', data.value.locationOfEnd);
        form.append('placeToSleep', data.value.placeToSleep);
        form.append('placeToEat', data.value.placeToEat);
        form.append('washingPlace', data.value.washingPlace);
      };
      this.uploader.uploadAll();
      this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
        console.log(JSON.parse(response ))
  let a = JSON.parse(response );
  console.log(JSON.parse(response ))
  this.router.navigate(['/single', a._id])

             };


  }
}
