import { Routes } from '@angular/router';
import { EventComponent } from './event/event.component';
import { HomeTripsComponent } from './home-trips/home-trips.component';
import { HomeTripsIdComponent } from './home-trips-id/home-trips-id.component';
import { UserMyMessagesComponent } from './user-my-messages/user-my-messages.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserMyprofileComponent } from './user-myprofile/user-myprofile.component';
import { UserEditComponent } from './user-edit/user-edit.component';

export const routes: Routes = [
  //{ path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'user/myprofile', component: UserMyprofileComponent,
      children: [
        { path: '/:id/edit', component: UserEditComponent },
        { path: 'user-my-message/:id', component: UserMyMessagesComponent}
       ]
   },
  { path: 'home-trips', component: HomeTripsComponent,
      children:[
        { path: ':id', component: HomeTripsIdComponent}
      ]
    },
  { path: 'event', component: EventComponent },
  { path: '**', redirectTo: '' }
];
