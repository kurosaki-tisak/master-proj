import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  FormArray,
} from '@angular/forms';

import { SuitColor } from '../../shared/domain';
import { SuitColorService } from '../../shared/suit-color.service';

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
    private router: Router) { }

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

    this.router.navigate(['/pages/new-order-step-four'], { queryParams: { selectedIndex: selectedOrderIds } });
  }

  onColorListDataState() {
    const s = this.colorAPI.GetSuitColorList();
    s.snapshotChanges().subscribe(data => {
      this.suitColorList = [];
      data.forEach(item => {
        const a = item.payload.toJSON();
        a['$key'] = item.key;
        this.suitColorList.push(a as SuitColor);

        const control = new FormControl(); // if first item set to true, else false
        (this.thirdForm.controls.colorList as FormArray).push(control);
      });
    });
  }
}
