import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ItinerationService } from './services/itineration.service';
import { TripService } from './services/trip.service';
import { AuthService } from './services/auth-user.service';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ItinerationService, TripService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
