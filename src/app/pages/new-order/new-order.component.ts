import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  FormArray,
  Validators,
} from '@angular/forms';
import { NbStepperComponent } from '@nebular/theme';

import { EventType, SuitColor, SuitType } from '../../shared/domain';
import { EventTypeService } from '../../shared/event-type.service';
import { SuitTypeService } from '../../shared/suit-type.service';
import { SuitColorService } from '../../shared/suit-color.service';

@Component({
  selector: 'ngx-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.scss'],
})
export class NewOrderComponent implements OnInit {

  firstForm: FormGroup;
  secondForm: FormGroup;
  thirdForm: FormGroup;
  forthForm: FormGroup;
  eventList: EventType[];
  suitTypeList: SuitType[];
  suitColorList: SuitColor[];

  @ViewChild('stepper', { static: true }) stepperComponent: NbStepperComponent;

  constructor(private fb: FormBuilder,
    private eventAPI: EventTypeService,
    private suitTypeAPI: SuitTypeService,
    private colorAPI: SuitColorService) { }

  ngOnInit() {
    this.onEventTypeDataState();
    this.onSuitTypeListDataState();
    this.onColorListDataState();

    this.firstForm = this.fb.group({
      eventTypes: new FormArray([]),
      firstCtrl: ['', Validators.required],
    });

    this.secondForm = this.fb.group({
    });

    this.thirdForm = this.fb.group({
    });

    this.forthForm = this.fb.group({
    });
  }

  onFirstSubmit() {
    this.firstForm.markAsDirty();
  }

  onSecondSubmit() {
    this.secondForm.markAsDirty();
  }

  onThirdSubmit() {
    this.thirdForm.markAsDirty();
  }

  onForthSubmit() {
    this.forthForm.markAsDirty();
  }

  onEventTypeDataState() {
    const s = this.eventAPI.GetEventTypeList();
    s.snapshotChanges().subscribe(data => {
      this.eventList = [];
      data.forEach((obj, index) => {
        const a = obj.payload.toJSON();
        a['$key'] = obj.key;
        this.eventList.push(a as EventType);

        const control = new FormControl(); // if first item set to true, else false
        (this.firstForm.controls.eventTypes as FormArray).push(control);
      });
    });
  }

  onSuitTypeListDataState() {
    const s = this.suitTypeAPI.GetSuitTypeList();
    s.snapshotChanges().subscribe(data => {
      this.suitTypeList = [];
      data.forEach(item => {
        const a = item.payload.toJSON();
        a['$key'] = item.key;
        this.suitTypeList.push(a as SuitType);
      });
    });
  }

  onColorListDataState() {
    const s = this.colorAPI.GetSuitColorList();
    s.snapshotChanges().subscribe(data => {
      this.suitColorList = [];
      data.forEach(item => {
        const a = item.payload.toJSON();
        a['$key'] = item.key;
        this.suitColorList.push(a as SuitColor);
      });
    });
  }
}

