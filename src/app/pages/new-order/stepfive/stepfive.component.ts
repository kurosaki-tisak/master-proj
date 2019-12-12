import { Component, OnInit } from '@angular/core';
import {
  RuleBodyTypeSuitPart,
  RuleSuitTypeVsSuitPart,
  RuleEventTypeVsSuitPart,
  BodyType,
} from '../../../shared/domain';
import {
  RuleBodyTypeSuitPartService,
  RuleEventTypeVsSuitPartService,
  RuleSuitTypeVsSuitPartService,
} from '../../../shared';
import { DataproviderService } from '../../../dataprovider.service';

@Component({
  selector: 'ngx-stepfive',
  templateUrl: './stepfive.component.html',
  styleUrls: ['./stepfive.component.scss'],
})
export class StepfiveComponent implements OnInit {

  ruleBodyTypeList: RuleBodyTypeSuitPart[];
  ruleSuitTypeList: RuleSuitTypeVsSuitPart[];
  ruleEventTypeList: RuleEventTypeVsSuitPart[];

  filteredRuleBodyTypeSuitPart: RuleBodyTypeSuitPart[];
  filteredRuleSuitTypeVsSuitPart: RuleSuitTypeVsSuitPart[];
  filteredRuleEventTypeVsSuitPart: RuleEventTypeVsSuitPart[];

  bodyType: BodyType;

  constructor(private data: DataproviderService,
    private ruleBodyTypeAPI: RuleBodyTypeSuitPartService,
    private ruleEventTypeAPI: RuleEventTypeVsSuitPartService,
    private ruleSuitTypeAPI: RuleSuitTypeVsSuitPartService) { }

  ngOnInit() {
    this.bodyType = this.data.bodyTypeStorage;

    this.onGetRuleBodyTypeState();
    this.onGetRuleSuitTypeVsSuitPartState();
    this.onGetRuleEventTypeVsSuitPartState();
  }

  onGetRuleBodyTypeState() {
    const s = this.ruleBodyTypeAPI.GetRuleBodyTypeSuitPartList();
    s.snapshotChanges().subscribe(data => {
      this.ruleBodyTypeList = [];
      data.forEach((obj, index) => {
        const a = obj.payload.toJSON();
        a['$key'] = obj.key;
        this.ruleBodyTypeList.push(a as RuleBodyTypeSuitPart);
      });

      this.filteredRuleBodyTypeSuitPart = this.ruleBodyTypeList
        .filter((v, i) => v['body-type'].id === this.bodyType.id);
    });
  }

  onGetRuleEventTypeVsSuitPartState() {
    const s = this.ruleEventTypeAPI.GetRuleEventTypeVsSuitPartList();
    s.snapshotChanges().subscribe(data => {
      this.ruleEventTypeList = [];
      data.forEach((obj, index) => {
        const a = obj.payload.toJSON();
        a['$key'] = obj.key;
        this.ruleEventTypeList.push(a as RuleEventTypeVsSuitPart);
      });
    });
  }

  onGetRuleSuitTypeVsSuitPartState() {
    const s = this.ruleSuitTypeAPI.GetRuleSuitTypeVsSuitPartList();
    s.snapshotChanges().subscribe(data => {
      this.ruleSuitTypeList = [];
      data.forEach((obj, index) => {
        const a = obj.payload.toJSON();
        a['$key'] = obj.key;
        this.ruleSuitTypeList.push(a as RuleSuitTypeVsSuitPart);
      });
    });
  }
}
