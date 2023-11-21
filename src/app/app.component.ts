import { Component } from '@angular/core';
import { UserLoginComponent } from './user-login/user-login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AgentsInsurance';
  public showNavBar = true;
toggleNavBar(component: any) {
   if(component instanceof UserLoginComponent) {
      this.showNavBar = false;
   } else {
      this.showNavBar = true;
   }
}
}
