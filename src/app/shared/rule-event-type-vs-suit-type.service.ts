import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root',
})
export class RuleEventTypeVsSuitTypeService {

  ruleList: AngularFireList<any>;    // Reference to data list, its an Observable

  constructor(private db: AngularFireDatabase) { }

  // Get Rule List
  GetRuleEventTypeVsSuitTypeList() {
    this.ruleList = this.db.list('rule-event-type-vs-suit-type');
    return this.ruleList;
  }
}
