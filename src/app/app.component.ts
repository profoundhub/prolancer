import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import {FirebaseService} from './services/firebase.service';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [FirebaseService]
})

export class AppComponent {
  title = 'app works!';
//  items: FirebaseListObservable<any[]>;
  businesses: Business[];
  categories: Category[];

  constructor(af: AngularFire) {
//    this.items = af.database.list('/items');
//    console.log(this.items);
  }
}


export interface Business{
    $key?: string;
    company?: string;
    description?:string;
    category:string;
    years_in_business?:number;
    street_address?:string;
    city:string;
    state?:string;
    zipcode?:string;
    phone?:string;
    email?:string;
    created_at:string;
}

export interface Category{
    $key?: string;
    name?: string;
}