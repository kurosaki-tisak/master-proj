import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root',
})
export class RuleEventTypeVsSuitPartService {

  ruleList: AngularFireList<any>;    // Reference to data list, its an Observable

  constructor(private db: AngularFireDatabase) { }

  GetRuleEventTypeVsSuitPartList() {
    this.ruleList = this.db.list('rule-event-type-vs-suit-part');
    return this.ruleList;
  }
}
