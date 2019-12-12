import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root',
})
export class RuleEventTypeVsSuitColorService {

  ruleList: AngularFireList<any>;    // Reference to data list, its an Observable

  constructor(private db: AngularFireDatabase) { }

  // Get Rule List
  GetRuleEventTypeVsSuitColorList() {
    this.ruleList = this.db.list('rule-event-type-vs-suit-color');
    return this.ruleList;
  }
}
