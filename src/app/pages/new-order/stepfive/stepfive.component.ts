import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import {
  EventType,
  SuitType,
  SuitColor,
  SuitPart,
  RuleBodyTypeSuitPart,
  RuleSuitTypeVsSuitPart,
  RuleEventTypeVsSuitPart,
  RuleBodyTypeVsSuitColor,
  BodyType,
} from '../../../shared/domain';
import {
  RuleBodyTypeSuitPartService,
  RuleEventTypeVsSuitPartService,
  RuleSuitTypeVsSuitPartService,
  RuleBodyTypeVsSuitColorService,
} from '../../../shared';
import { DataproviderService } from '../../../dataprovider.service';

@Component({
  selector: 'ngx-stepfive',
  templateUrl: './stepfive.component.html',
  styleUrls: ['./stepfive.component.scss'],
})
export class StepfiveComponent implements OnInit {

  selectedEventType: EventType[];
  selectedSuitType: SuitType[];
  selectedSuitColor: SuitColor[];

  bodyType: BodyType;

  ruleBodyTypeList: RuleBodyTypeSuitPart[];
  ruleBodyTypeVsSuitColorList: RuleBodyTypeVsSuitColor[];
  ruleSuitTypeList: RuleSuitTypeVsSuitPart[];
  ruleEventTypeList: RuleEventTypeVsSuitPart[];

  filteredRuleBodyTypeSuitPart: RuleBodyTypeSuitPart[];
  filteredRuleSuitTypeVsSuitPart: RuleSuitTypeVsSuitPart[];
  filteredRuleEventTypeVsSuitPart: RuleEventTypeVsSuitPart[];

  noSelectOptionRecommendedSuitList: any[];
  finalRecommendedSuitList: any[];
  selectedRecommendedSuitList: any[];

  fifthForm: FormGroup;

  constructor(private data: DataproviderService,
    private ruleBodyTypeAPI: RuleBodyTypeSuitPartService,
    private ruleBodyTypeVsSuitColorAPI: RuleBodyTypeVsSuitColorService,
    private ruleEventTypeAPI: RuleEventTypeVsSuitPartService,
    private ruleSuitTypeAPI: RuleSuitTypeVsSuitPartService,
    private fb: FormBuilder,
    private router: Router) {

    this.bodyType = this.data.bodyTypeStorage as BodyType;
    this.selectedEventType = (data.selectedEventTypeStorage as EventType[]);
    this.selectedSuitType = (data.selectedSuitTypeStorage as SuitType[]);
    this.selectedSuitColor = (data.selectedSuitColorStorage as SuitColor[]);

    this.fifthForm = this.fb.group({
      recommendedArr: new FormArray([]),
    });
  }

  ngOnInit() {
    this.onGetRuleBodyTypeState();
    this.onGetRuleEventTypeVsSuitPartState();
  }

  onFindRecommendBySuitTypeAndBodyType(list: RuleSuitTypeVsSuitPart[]) {

    this.selectedSuitType.forEach(item => {

      const sp = list.find(v => v['suit-type'].id === item.id);
      const spArr = _.toArray(sp['suit-part']);

      const s = this.onFillMissingSuitPart(spArr);

      this.onInsertSuitTypeAndSuitParts(item, s);
    });

  }

  onFillMissingSuitPart(list: SuitPart[]) {
    const s = this.ruleBodyTypeList
      .filter(v => v['body-type'].id === this.bodyType.id);

    const sp = _.toArray(s[0]['suit-part']);

    const newList = [];
    list.forEach((obj, index) => {

      if (obj.sub == null) {
        const newObj = {
          id: obj.id,
          title: obj.title,
          sub: sp.find(v => v.id === obj.id).sub,
          isFixed: obj.isFixed,
        };
        newList.push(newObj);
      }
      newList.push(obj);

    });

    const filtered = _.uniqBy(newList, 'id');
    return filtered;
  }

  onFindRecommendedByBodyType() {
    const s = this.ruleBodyTypeList
      .filter((v, i) => v['body-type'].id === this.bodyType.id);

    const sp = _.toArray(s[0]['suit-part']);

    this.noSelectOptionRecommendedSuitList = [];
    this.finalRecommendedSuitList = [];

    this.onInsertSuitTypeAndSuitParts(
      {
        title: 'Made to Maesurement',
        imageUrl: '',
      },
      sp);

    // Continue Find
    this.onGetRuleSuitTypeVsSuitPartState();
  }

  onInsertSuitTypeAndSuitParts(suitType: any, suitParts: any[]) {
    const sc = this.ruleBodyTypeVsSuitColorList
      .find(v => v['body-type'].id === this.bodyType.id);

    const selectedColors = this.data.selectedSuitColorStorage;

    let scmap: any;
    if (selectedColors === null) {
      scmap = _.toArray(sc['suit-color']);
    } else {
      scmap = _.toArray(selectedColors);
    }

    scmap.forEach((item, index) => {
      const obj = {
        id: index,
        'suit-color': item,
        'suit-type': suitType,
        'suit-part': suitParts,
      };

      this.noSelectOptionRecommendedSuitList.push(obj);
      this.finalRecommendedSuitList.push(obj);

      const control = new FormControl();
      (this.fifthForm.controls.recommendedArr as FormArray).push(control);
    });
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

      this.onGetRuleBodyTypeVsSuitColorState();
    });
  }

  onGetRuleBodyTypeVsSuitColorState() {
    const s = this.ruleBodyTypeVsSuitColorAPI.GetRuleBodyTypeSuitColorList();
    s.snapshotChanges().subscribe(data => {
      this.ruleBodyTypeVsSuitColorList = [];
      data.forEach((obj, index) => {
        const a = obj.payload.toJSON();
        a['$key'] = obj.key;
        this.ruleBodyTypeVsSuitColorList.push(a as RuleBodyTypeVsSuitColor);
      });

      this.onFindRecommendedByBodyType();
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

      this.onFindRecommendBySuitTypeAndBodyType(this.ruleSuitTypeList);

    });
  }

  onFifthSubmit() {
    this.selectedRecommendedSuitList = [];

    const selectedOrderIds = this.fifthForm.value.recommendedArr
      .map((v, i) => v ? this.finalRecommendedSuitList[i].id : null)
      .filter(v => v !== null);

    selectedOrderIds.forEach(item => {
      const b = _.find(this.finalRecommendedSuitList, ['id', item]);
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

  onBackPressed() {
    this.router.navigate(['/pages/new-order/step-four']);
  }
}
