import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root',
})
export class RuleBodyTypeVsSuitColorService {

  ruleList: AngularFireList<any>;
  rule: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) { }

  GetRuleBodyTypeSuitColorList() {
    this.ruleList = this.db.list('rule-body-type-vs-suit-color');
    return this.ruleList;
  }

  GetRuleBodyTypeSuitColor(id: string) {
    this.rule = this.db.object('rule-body-type-vs-suit-color/' + id);
    return this.rule;
  }
}
