import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root',
})
export class SuitColorService {

  suitColors: AngularFireList<any>;    // Reference to Student data list, its an Observable
  suitColor: AngularFireObject<any>;   // Reference to Student object, its an Observable too

  constructor(private db: AngularFireDatabase) { }

  // Fetch Suit Color List
  GetSuitColorList() {
    this.suitColors = this.db.list('suit-color');
    return this.suitColors;
  }

  // Fetch Suit Color Object
  GetSuitColor(id: string) {
    this.suitColor = this.db.object('suit-color/' + id);
    return this.suitColor;
  }

}
