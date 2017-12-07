import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ItinerationService } from './services/itineration.service';
import { TripService } from './services/trip.service';
import { AuthService } from './services/auth-user.service';
import { AppComponent } from './app.component';
import { EventService } from './services/event.service'
import { ReviewService } from './services/review.service'
import { UserService } from './services/user.service'
import { MessageService } from './services/message.service';
import { HomeTripsComponent } from './home-trips/home-trips.component';
import { HomeTripsIdComponent } from './home-trips-id/home-trips-id.component';
import { EventComponent } from './event/event.component';
import { UserMyMessagesComponent } from './user-my-messages/user-my-messages.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { routes } from './routes';
import { RouterModule } from "@angular/router";


@NgModule({
  declarations: [
    AppComponent,
    HomeTripsComponent,
    HomeTripsIdComponent,
    EventComponent,
    UserMyMessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ItinerationService, TripService, AuthService, EventService, ReviewService, UserService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
