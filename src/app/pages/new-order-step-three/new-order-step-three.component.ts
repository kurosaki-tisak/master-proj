import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  FormArray,
} from '@angular/forms';

import { SuitColor } from '../../shared/domain';
import { SuitColorService } from '../../shared/suit-color.service';
import { DataproviderService } from '../../dataprovider.service';

@Component({
  selector: 'ngx-new-order-step-three',
  templateUrl: './new-order-step-three.component.html',
  styleUrls: ['./new-order-step-three.component.scss'],
})
export class NewOrderStepThreeComponent implements OnInit {

  thirdForm: FormGroup;
  suitColorList: SuitColor[];

  constructor(private fb: FormBuilder,
    private colorAPI: SuitColorService,
    private router: Router,
    private data: DataproviderService) {


    }

  ngOnInit() {
    this.onColorListDataState();

    this.thirdForm = this.fb.group({
      colorList: new FormArray([]),
    });
  }

  onThirdSubmit() {
    const selectedOrderIds = this.thirdForm.value.colorList
      .map((v, i) => v ? this.suitColorList[i].id : null)
      .filter(v => v !== null);

    const param = this.onFindChecked(selectedOrderIds);
    const merged = this.onUnionParam(param);

    // console.log(param);

    this.data.suitColorStorage = { 'selectedIds': merged };

    this.router.navigate(['/pages/new-order-step-four'] );
  }

  onFindChecked(list: []) {
    const result = [];
    list.forEach((obj, index) => {
      result.push(this.suitColorList.find((v => v.id === obj)));
    });
    return result;
  }

  onUnionParam(list: SuitColor[]) {
    let result: SuitColor[];
    list.forEach((obj, index) => {
      result = _.merge(obj);
    });
    return result;
  }

  onColorListDataState() {
    const s = this.colorAPI.GetSuitColorList();
    s.snapshotChanges().subscribe(data => {
      this.suitColorList = [];
      data.forEach(item => {
        const a = item.payload.toJSON();
        a['$key'] = item.key;
        this.suitColorList.push(a as SuitColor);

        const control = new FormControl();
        (this.thirdForm.controls.colorList as FormArray).push(control);
      });
    });
  }
}
