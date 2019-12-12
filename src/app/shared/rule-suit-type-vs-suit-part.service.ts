import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root',
})
export class RuleSuitTypeVsSuitPartService {

  ruleList: AngularFireList<any>;    // Reference to data list, its an Observable

  constructor(private db: AngularFireDatabase) { }

  // Get Rule List
  GetRuleSuitTypeVsSuitPartList() {
    this.ruleList = this.db.list('rule-suit-type-vs-suit-part');
    return this.ruleList;
  }
}
