import { Routes } from '@angular/router';
import { EventComponent } from './event/event.component';
import { HomeTripsComponent } from './home-trips/home-trips.component';
import { HomeTripsIdComponent } from './home-trips-id/home-trips-id.component';
import { UserMyMessagesComponent } from './user-my-messages/user-my-messages.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserMyprofileComponent } from './user-myprofile/user-myprofile.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { NewTripComponent } from './new-trip/new-trip.component';
import { NewItinerationComponent } from './new-itineration/new-itineration.component';
import { HomeItinerationComponent } from './home-itineration/home-itineration.component';
import { NewReviewComponent } from './new-review/new-review.component';

import { IsLoggedInService } from './services/is-logged-in.canactivate.service';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'user/myprofile', component: UserMyprofileComponent, canActivate: [ IsLoggedInService ],
      children: [
        { path: ':id/edit', component: UserEditComponent },
        { path: 'user-my-message/:id', component: UserMyMessagesComponent}
       ]
   },
  { path: 'new-trips', component: NewTripComponent},
  { path: 'new-review/:id', component: NewReviewComponent},
  { path: 'new-itineration/:id', component: NewItinerationComponent},
  { path: 'single/:id', component: HomeTripsIdComponent},
  { path: 'home-itineration', component: HomeItinerationComponent},
  { path: 'home-trips', component: HomeTripsComponent, canActivate: [ IsLoggedInService ]},
  { path: 'event', component: EventComponent },
  { path: '**', redirectTo: '' }
];
