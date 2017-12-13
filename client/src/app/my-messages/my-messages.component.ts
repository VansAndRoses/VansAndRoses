import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

@Component({
  selector: 'app-my-messages',
  templateUrl: './my-messages.component.html',
  styleUrls: ['./my-messages.component.css']
})
export class MyMessagesComponent implements OnInit {
  listMessages:any;

  constructor(private newMessageService : MessageService, private route: ActivatedRoute, public router:Router) { }

  ngOnInit() {
    this.newMessageService.messageGet()
      .subscribe(messages => {this.listMessages = messages})
  }

}
