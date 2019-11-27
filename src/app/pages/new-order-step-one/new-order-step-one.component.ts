import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  FormArray,
} from '@angular/forms';
import { EventType, SuitType } from '../../shared/domain';
import { EventTypeService } from '../../shared/event-type.service';
import { DataproviderService } from '../../dataprovider.service';

@Component({
  selector: 'ngx-new-order-step-one',
  templateUrl: './new-order-step-one.component.html',
  styleUrls: ['./new-order-step-one.component.scss'],
})
export class NewOrderStepOneComponent implements OnInit {

  firstForm: FormGroup;
  eventList: EventType[];

  constructor(private eventAPI: EventTypeService,
    private fb: FormBuilder,
    private router: Router,
    private data: DataproviderService) { }

  ngOnInit() {
    this.onEventTypeDataState();

    this.firstForm = this.fb.group({
      eventTypes: new FormArray([]),
    });
  }

  onFirstSubmit() {
    const selectedOrderIds = this.firstForm.value.eventTypes
      .map((v, i) => v ? this.eventList[i].id : null)
      .filter(v => v !== null);

    const param = this.onFindChecked(selectedOrderIds);
    const merged = this.onUnionParam(param);

    this.data.storage = { 'selectedIds': merged };

    this.router.navigate(['/pages/new-order-step-two'] );
  }

onFindChecked(list: []) {
  let result = [];
  list.forEach((obj, _) => {
    result.push(this.eventList.find((v => v.id == obj))['suit-type']);
  });
  return result;
}

onUnionParam(list: SuitType[]) {
  let result: SuitType[];
  list.forEach((obj, index) => {
    result = _.merge(obj);
  });
  return result;
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
}
