import { Component, OnInit } from '@angular/core';
import  * as firebase  from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyCdmR1eXt4AW6Q8Uy6iBaqNd8ud0AQsL4E",
      authDomain: "book-ef560.firebaseapp.com",
      databaseURL: "https://book-ef560.firebaseio.com",
      projectId: "book-ef560",
      storageBucket: "book-ef560.appspot.com",
      messagingSenderId: "553031958080"
    });
  }
  onNavigate(feature: string) {
  }
}
