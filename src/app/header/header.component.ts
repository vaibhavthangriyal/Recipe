import { Component, EventEmitter, Output } from '@angular/core';
import { authService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  username:string;
  
  constructor(public authService:authService){}
  
  onclicki(){
    console.log("asd");
  }

  onLogout(){
    this.authService.logout();
  }
}
