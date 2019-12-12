import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as _ from 'lodash';
import { FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';
import { SuitColor, RuleEventTypeVsSuitColor } from '../../../shared/domain';
import { SuitColorService, RuleEventTypeVsSuitColorService } from '../../../shared';
import { DataproviderService } from '../../../dataprovider.service';

@Component({
  selector: 'ngx-stepthree',
  templateUrl: './stepthree.component.html',
  styleUrls: ['./stepthree.component.scss'],
})
export class StepthreeComponent implements OnInit {

  thirdForm: FormGroup;
  suitColorList: SuitColor[];
  ruleEventTypeVsSuitColorList: RuleEventTypeVsSuitColor[];
  filteredSuitColorList: any[];

  constructor(private fb: FormBuilder,
    private suitColorAPI: SuitColorService,
    private ruleSuitColorAPI: RuleEventTypeVsSuitColorService,
    private data: DataproviderService,
    private router: Router) { }

  ngOnInit() {
    this.thirdForm = this.fb.group({
      suitColors: new FormArray([]),
    });

    this.onGetRuleEventTypeVsSuitColor();
    this.onSuitColorListDataState();
  }

  onThirdSubmit() {
    const selectedOrderIds = this.thirdForm.value.suitColors
      .map((v, i) => v ? this.suitColorList[i].title : null)
      .filter(v => v !== null);

    this.data.selectedSuitColorStorage = selectedOrderIds;

    this.router.navigate(['/pages/new-order/step-four']);
  }

  onSetSuitColorToView(list: []) {
    this.filteredSuitColorList = [];
    list.forEach(item => {
      const obj = { 'title': item };
      const b = _.find(this.ruleEventTypeVsSuitColorList, ['event-type', obj]);
      this.filteredSuitColorList.push(_.toArray(b['suit-color']));
    });

    const unique = _.uniq(_.flatten(this.filteredSuitColorList));
    const uniqueBy = _.unionBy(unique, 'title');
    const diff = _.differenceBy(this.suitColorList, uniqueBy, 'title');

    this.suitColorList.splice(0, this.suitColorList.length);
    this.thirdForm.controls.suitColors.reset();

    diff.forEach((obj, index) => {
      this.suitColorList.push(obj as SuitColor);

      const control = new FormControl();
      (this.thirdForm.controls.suitColors as FormArray).push(control);
    });
  }

  onSuitColorListDataState() {
    const s = this.suitColorAPI.GetSuitColorList();
    s.snapshotChanges().subscribe(data => {
      this.suitColorList = [];
      data.forEach((obj, index) => {
        const a = obj.payload.toJSON();
        a['$key'] = obj.key;
        this.suitColorList.push(a as SuitColor);
      });

      const prevData = this.data.selectedEventTypeStorage;
      this.onSetSuitColorToView(prevData);
    });
  }

  onGetRuleEventTypeVsSuitColor() {
    const s = this.ruleSuitColorAPI.GetRuleEventTypeVsSuitColorList();
    s.snapshotChanges().subscribe(data => {
      this.ruleEventTypeVsSuitColorList = [];
      data.forEach((obj, index) => {
        const a = obj.payload.toJSON();
        a['$key'] = obj.key;
        this.ruleEventTypeVsSuitColorList.push(a as RuleEventTypeVsSuitColor);
      });
    });
  }

  onBackPressed() {
    this.router.navigate(['/pages/new-order/step-two']);
  }
}
