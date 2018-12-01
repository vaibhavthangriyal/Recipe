import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { authService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authService:authService) { }

  ngOnInit() {
  }

  onSignUp(form:NgForm){
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signup(email, password);
  }
}
