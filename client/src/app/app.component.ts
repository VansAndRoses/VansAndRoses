import { Component } from '@angular/core';
import { AuthService } from './services/auth-user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Vans&Roses';
  user:object;
    constructor(public auth:AuthService) {
      this.user = this.auth.getUser();
      this.auth.getLoginEventEmitter()
          .subscribe( user => this.user=user );
    }
  ngOnInit() {
  }
}
