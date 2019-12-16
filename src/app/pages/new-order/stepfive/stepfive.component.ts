import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import {
  RuleBodyTypeSuitPart,
  RuleSuitTypeVsSuitPart,
  RuleEventTypeVsSuitPart,
  BodyType,

  MockRecommed,
} from '../../../shared/domain';
import {
  RuleBodyTypeSuitPartService,
  RuleEventTypeVsSuitPartService,
  RuleSuitTypeVsSuitPartService,

  MockRecomendedSuitService,
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

  selectedRecommendedSuitList: any[];
  mockRecommendedSuitList: MockRecommed[];

  fifthForm: FormGroup;

  constructor(private data: DataproviderService,
    private ruleBodyTypeAPI: RuleBodyTypeSuitPartService,
    private ruleEventTypeAPI: RuleEventTypeVsSuitPartService,
    private ruleSuitTypeAPI: RuleSuitTypeVsSuitPartService,
    private fb: FormBuilder,
    private router: Router,

    private mockRecommededAPI: MockRecomendedSuitService) {
    this.fifthForm = this.fb.group({
      recommendedArr: new FormArray([]),
    });
  }

  ngOnInit() {
    this.bodyType = this.data.bodyTypeStorage;

    this.onGetRuleBodyTypeState();
    this.onGetRuleSuitTypeVsSuitPartState();
    this.onGetRuleEventTypeVsSuitPartState();

    this.onGetMockData();
  }

  onFifthSubmit() {
    const selectedOrderIds = this.fifthForm.value.recommendedArr
      .map((v, i) => v ? this.mockRecommendedSuitList[i].id : null)
      .filter(v => v !== null);

    this.selectedRecommendedSuitList = [];
    selectedOrderIds.forEach(item => {
      const b = _.find(this.mockRecommendedSuitList, ['id', item]);
      const obj = {
        'suit-color': b['suit-color'],
        'suit-type': b['suit-type'],
        'suit-part': b['suit-part'],
      };
      this.selectedRecommendedSuitList.push(obj);
    });

    const s = _.union(this.selectedRecommendedSuitList);

    this.data.selectedRecommendedSuit = s;

    this.router.navigate(['/pages/post-order']);
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

  onBackPressed() {
    this.router.navigate(['/pages/new-order/step-four']);
  }

  // Mock Recommended
  onGetMockData() {
    const s = this.mockRecommededAPI.GetMockRecommendedSuit();
    s.snapshotChanges().subscribe(data => {
      this.mockRecommendedSuitList = [];
      data.forEach((obj, index) => {
        const a = obj.payload.toJSON();
        a['$key'] = obj.key;
        const o = a as MockRecommed;
        const arrP = _.toArray(o['suit-part']);
        o['suit-part'] = arrP;

        this.mockRecommendedSuitList.push(o as MockRecommed);

        const control = new FormControl();
        (this.fifthForm.controls.recommendedArr as FormArray).push(control);
      });
    });
  }
}
