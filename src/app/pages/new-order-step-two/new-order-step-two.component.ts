import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  FormArray,
} from '@angular/forms';

import { SuitType } from '../../shared/domain';
import { SuitTypeService } from '../../shared/suit-type.service';
import { DataproviderService } from '../../dataprovider.service';

@Component({
  selector: 'ngx-new-order-step-two',
  templateUrl: './new-order-step-two.component.html',
  styleUrls: ['./new-order-step-two.component.scss'],
})
export class NewOrderStepTwoComponent implements OnInit {

  secondForm: FormGroup;
  suitTypeList: SuitType[];
  selectedIndex: SuitType[];

  constructor(private fb: FormBuilder,
    private suitTypeAPI: SuitTypeService,
    private router: Router,
    private data: DataproviderService) {

    this.selectedIndex = this.data.storage;
  }

  ngOnInit() {
    this.onSuitTypeListDataState();

    this.secondForm = this.fb.group({
      suitTypes: new FormArray([]),
    });
  }

  onSecondSubmit() {
    const selectedOrderIds = this.secondForm.value.suitTypes
      .map((v, i) => v ? this.suitTypeList[i].id : null)
      .filter(v => v !== null);

    const param = this.onFindChecked(selectedOrderIds);
    const merged = this.onUnionParam(param);

    this.data.storage = { 'selectedIds': merged };

    this.router.navigate(['/pages/new-order-step-three']);
  }

  onFindChecked(list: []) {
    const result = [];
    list.forEach((obj, index) => {
      result.push(this.suitTypeList.find((v => v.id === obj))['suit-type']);
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

  onSuitTypeListDataState() {
    const s = this.suitTypeAPI.GetSuitTypeList();
    s.snapshotChanges().subscribe(data => {
      this.suitTypeList = [];
      data.forEach((obj, index) => {
        const a = obj.payload.toJSON();
        a['$key'] = obj.key;
        this.suitTypeList.push(a as SuitType);

        const control = new FormControl(); // if first item set to true, else false
        (this.secondForm.controls.suitTypes as FormArray).push(control);
      });
    });
  }

  onFilterOutSelected(list: SuitType[]) {
    const result = [];
    this.selectedIndex.forEach((obj, index) => {
      result.push(list.find((v => v.title !== obj.title))['suit-type']);
    });
    return result;
  }

}
