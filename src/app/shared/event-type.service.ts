import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root',
})
export class EventTypeService {

  eventTypeList: AngularFireList<any>;    // Reference to data list, its an Observable
  eventType: AngularFireObject<any>;   // Reference to object, its an Observable too

  constructor(private db: AngularFireDatabase) { }

  // Fetch Customer List
  GetEventTypeList() {
    this.eventTypeList = this.db.list('event-type');
    return this.eventTypeList;
  }

  GetEventType(id: string) {
    this.eventType = this.db.object('event-type/' + id);
    return this.eventType;
  }
}
