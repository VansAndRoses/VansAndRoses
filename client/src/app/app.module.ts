import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ItinerationService } from './services/itineration.service';
import { TripService } from './services/trip.service';
import { AuthService } from './services/auth-user.service';
import { IsLoggedInService } from './services/is-logged-in.canactivate.service';
import { AppComponent } from './app.component';
import { EventService } from './services/event.service'
import { ReviewService } from './services/review.service'
import { UserService } from './services/user.service'
import { MessageService } from './services/message.service';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component'
import { HomeTripsComponent } from './home-trips/home-trips.component';
import { HomeTripsIdComponent } from './home-trips-id/home-trips-id.component';
import { EventComponent } from './event/event.component';
import { UserMyMessagesComponent } from './user-my-messages/user-my-messages.component';
import { routes } from './routes';
import { RouterModule } from "@angular/router";
import { UserMyprofileComponent } from './user-myprofile/user-myprofile.component';
import { UserIdComponent } from './user-id/user-id.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { NewTripComponent } from './new-trip/new-trip.component';
import { NewItinerationComponent } from './new-itineration/new-itineration.component';
import { HomeItinerationComponent } from './home-itineration/home-itineration.component';
import { NewReviewComponent } from './new-review/new-review.component';
import { SearchPipePipe } from './search-pipe.pipe';
import { AgmCoreModule } from '@agm/core';
import { NewMessageComponent } from './new-message/new-message.component';
import { MyMessagesComponent } from './my-messages/my-messages.component';
import { FileUploadModule } from "ng2-file-upload";


@NgModule({
  declarations: [
    AppComponent,
    HomeTripsComponent,
    HomeTripsIdComponent,
    EventComponent,
    UserMyMessagesComponent,
    LoginComponent,
    SignupComponent,
    UserMyprofileComponent,
    UserIdComponent,
    UserEditComponent,
    NewTripComponent,
    NewItinerationComponent,
    HomeItinerationComponent,
    NewReviewComponent,
    SearchPipePipe,
    NewMessageComponent,
    MyMessagesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    FileUploadModule,
    RouterModule.forRoot(routes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB5J2TVaB_Ez_NK5ZISeomvNMfePMjXjOM',
      libraries: ["places"]
    })
  ],
  providers: [ItinerationService, TripService, AuthService, EventService, ReviewService, UserService, MessageService, IsLoggedInService],
  bootstrap: [AppComponent]
})
export class AppModule { }
