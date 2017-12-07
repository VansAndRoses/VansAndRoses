import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { EventService } from './services/event.service'
import { ReviewService } from './services/review.service'
import { UserService } from './services/user.service'
import { MessageService } from './services/message.service'


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [EventService, ReviewService, UserService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
