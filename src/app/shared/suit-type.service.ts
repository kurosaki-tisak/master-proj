import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root',
})
export class SuitTypeService {

  suitTypes: AngularFireList<any>;    // Reference to data list, its an Observable
  suitType: AngularFireObject<any>;   // Reference to object, its an Observable too

  constructor(private db: AngularFireDatabase) { }

  // Fetch Suit Type List
  GetSuitTypeList() {
    this.suitTypes = this.db.list('suit-type');
    return this.suitTypes;
  }

  // Fetch Suit Type
  GetSuitType(id: string) {
    this.suitType = this.db.object('suit-type/' + id);
    return this.suitType;
  }
}
