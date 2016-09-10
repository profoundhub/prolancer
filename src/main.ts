import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import { FIREBASE_PROVIDERS, defaultFirebase } from 'angularfire2';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  FIREBASE_PROVIDERS,
  // Initialize Firebase app  
  defaultFirebase({
    apiKey: "AIzaSyAt8czLnmYWB3wJi79u5aXM0T-LT2Vy5TA",
    authDomain: "prolancers-b8a3e.firebaseapp.com",
    databaseURL: "https://prolancers-b8a3e.firebaseio.com",
    storageBucket: "prolancers-b8a3e.appspot.com",
  })
]);
