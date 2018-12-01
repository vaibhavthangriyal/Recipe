import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { authService } from '../auth/auth.service';
import * as jquery from 'jquery-smooth-scroll';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(private authService:authService) { }

  ngOnInit() {
  }

  onSubmit(loginForm:NgForm){
    const email = loginForm.value.username;
    const password = loginForm.value.password;
    this.authService.signin(email, password);
  }

}
