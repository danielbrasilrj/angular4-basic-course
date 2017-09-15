import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyBEHNsLK4L4ciMNnpPfGo5E3adl6coz4nE",
      authDomain: "ng-recipe-book-3e51b.firebaseapp.com"
    });
  }

}
