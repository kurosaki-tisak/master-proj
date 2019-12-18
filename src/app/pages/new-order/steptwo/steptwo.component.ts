import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as _ from 'lodash';
import { FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';
import { SuitType } from '../../../shared/domain';
import { SuitTypeService } from '../../../shared';
import { DataproviderService } from '../../../dataprovider.service';

@Component({
  selector: 'ngx-steptwo',
  templateUrl: './steptwo.component.html',
  styleUrls: ['./steptwo.component.scss'],
})
export class SteptwoComponent implements OnInit {

  secondForm: FormGroup;
  suitTypeList: SuitType[];
  selectedSuitTypeList: any[];

  constructor(private fb: FormBuilder,
    private suitTypeAPI: SuitTypeService,
    private data: DataproviderService,
    private router: Router) {
  }

  ngOnInit() {
    this.secondForm = this.fb.group({
      suitTypes: new FormArray([]),
    });

    this.onSuitTypeListDataState();
  }

  onSecondSubmit() {
    const selectedOrderIds = this.secondForm.value.suitTypes
      .map((v, i) => v ? this.suitTypeList[i] : null)
      .filter(v => v !== null);

    this.data.selectedSuitTypeStorage = selectedOrderIds;

    this.router.navigate(['/pages/new-order/step-three']);
  }

  onSetSuitTypeToView(list: []) {
    const s = _.differenceBy(this.suitTypeList, list, 'title');

    this.suitTypeList = [];
    this.secondForm.controls.suitTypes.reset();

    s.forEach((obj, index) => {
      this.suitTypeList.push(obj as SuitType);

      const control = new FormControl();
      (this.secondForm.controls.suitTypes as FormArray).push(control);
    });
  }

  onSuitTypeListDataState() {
    const s = this.suitTypeAPI.GetSuitTypeList();
    s.snapshotChanges().subscribe(data => {
      this.suitTypeList = [];
      data.forEach((obj, index) => {
        const a = obj.payload.toJSON();
        a['$key'] = obj.key;
        this.suitTypeList.push(a as SuitType);
      });

      const prevData = this.data.filteredSuitTypeStorage;

      this.onSetSuitTypeToView(prevData);

    });
  }

  onBackPressed() {
    this.router.navigate(['/pages/new-order/step-one']);
  }
}
