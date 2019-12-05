import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root',
})
export class RuleBodyTypeSuitPartService {

  ruleList: AngularFireList<any>;    // Reference to data list, its an Observable
  rule: AngularFireObject<any>;   // Reference to object, its an Observable too

  constructor(private db: AngularFireDatabase) { }

  // Get Rule List
  GetRuleBodyTypeSuitPartList() {
    this.ruleList = this.db.list('rule-bodytype-suit-part');
    return this.ruleList;
  }

  GetRuleBodyTypeSuitPart(id: string) {
    this.rule = this.db.object('rule-bodytype-suit-part/' + id);
    return this.rule;
  }
}
