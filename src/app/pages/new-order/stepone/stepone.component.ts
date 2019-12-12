import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as _ from 'lodash';
import { FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';
import { EventType, RuleEventTypeVsSuitType } from '../../../shared/domain';
import { EventTypeService, RuleEventTypeVsSuitTypeService } from '../../../shared';
import { DataproviderService } from '../../../dataprovider.service';

@Component({
  selector: 'ngx-stepone',
  templateUrl: './stepone.component.html',
  styleUrls: ['./stepone.component.scss'],
})
export class SteponeComponent implements OnInit {

  firstForm: FormGroup;
  eventList: EventType[];
  ruleEventTypeVsSuitTypeList: RuleEventTypeVsSuitType[];
  selectedEventTypeList: any[];

  constructor(private fb: FormBuilder,
    private eventAPI: EventTypeService,
    private ruleEventTypeAPI: RuleEventTypeVsSuitTypeService,
    private data: DataproviderService,
    private router: Router) { }

  ngOnInit() {
    this.firstForm = this.fb.group({
      eventTypes: new FormArray([]),
    });

    this.onGetRuleEventTypeVsSuitType();
    this.onEventTypeDataState();
  }

  onFirstSubmit() {
    const selectedOrderIds = this.firstForm.value.eventTypes
      .map((v, i) => v ? this.eventList[i].title : null)
      .filter(v => v !== null);

    this.data.selectedEventTypeStorage = selectedOrderIds;

    this.selectedEventTypeList = [];
    selectedOrderIds.forEach(item => {
      const obj = { 'title': item };
      const b = _.find(this.ruleEventTypeVsSuitTypeList, ['event-type', obj]);
      this.selectedEventTypeList.push(_.toArray(b['suit-type']));
    });

    const s = _.uniq(_.flatten(this.selectedEventTypeList));
    const unique = _.uniqBy(s, 'title');

    this.data.filteredSuitTypeStorage = unique;

    this.router.navigate(['/pages/new-order/step-two']);
  }

  onEventTypeDataState() {
    const s = this.eventAPI.GetEventTypeList();
    s.snapshotChanges().subscribe(data => {
      this.eventList = [];
      data.forEach((obj, index) => {
        const a = obj.payload.toJSON();
        a['$key'] = obj.key;
        this.eventList.push(a as EventType);

        const control = new FormControl();
        (this.firstForm.controls.eventTypes as FormArray).push(control);
      });
    });
  }

  onGetRuleEventTypeVsSuitType() {
    const s = this.ruleEventTypeAPI.GetRuleEventTypeVsSuitTypeList();
    s.snapshotChanges().subscribe(data => {
      this.ruleEventTypeVsSuitTypeList = [];
      data.forEach((obj, index) => {
        const a = obj.payload.toJSON();
        a['$key'] = obj.key;
        this.ruleEventTypeVsSuitTypeList.push(a as RuleEventTypeVsSuitType);
      });
    });
  }

}
