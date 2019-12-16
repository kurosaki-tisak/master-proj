import { Component, OnInit, ViewChild } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { Router } from '@angular/router';
import * as _ from 'lodash';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbStepperComponent } from '@nebular/theme';
import { BodyObj } from '../../../shared/domain';
import { DataproviderService } from '../../../dataprovider.service';

import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'ngx-stepfour',
  templateUrl: './stepfour.component.html',
  styleUrls: ['./stepfour.component.scss'],
})
export class StepfourComponent implements OnInit {

  @ViewChild('stepper', { static: true }) stepper: NbStepperComponent;

  forthForm: FormGroup;
  bodyObj: BodyObj;

  popupComponent: PopupComponent;

  constructor(private fb: FormBuilder,
    private data: DataproviderService,
    private dialogService: NbDialogService,
    private router: Router) { }

  ngOnInit() {
    this.forthForm = this.fb.group({
      armLenghtRightCtrl: ['', Validators.required],
      armLenghtLeftCtrl: ['', Validators.required],
      armMusclesCtrl: ['', Validators.required],
      bellyRoundCtrl: ['', Validators.required],
      chestCtrl: ['', Validators.required],
      chestFrontCtrl: ['', Validators.required],
      chestBackCtrl: ['', Validators.required],
      shoulderLeftCtrl: ['', Validators.required],
      shoulderRightCtrl: ['', Validators.required],
      circumferenceCalfCtrl: ['', Validators.required],
      circumferenceLegsCtrl: ['', Validators.required],
      circumferenceThighCtrl: ['', Validators.required],
      circumferenceNeckCtrl: ['', Validators.required],
      crotchCtrl: ['', Validators.required],
      hipCtrl: ['', Validators.required],
      hipShirtCtrl: ['', Validators.required],
      lengthPantCtrl: ['', Validators.required],
      lengthShirtCtrl: ['', Validators.required],
      lengthSuitCtrl: ['', Validators.required],
      waistShirtCtrl: ['', Validators.required],
      waistPantCtrl: ['', Validators.required],
      wristCtrl: ['', Validators.required],
    });
  }

  onForthSubmit() {
    this.bodyObj = {
      'arm-lenght-right': this.forthForm.get('armLenghtRightCtrl').value,
      'arm-length-left': this.forthForm.get('armLenghtLeftCtrl').value,
      'arm-muscles': this.forthForm.get('armMusclesCtrl').value,
      'belly-round': this.forthForm.get('bellyRoundCtrl').value,
      chest: this.forthForm.get('chestCtrl').value,
      'chest-back': this.forthForm.get('chestBackCtrl').value,
      'chest-front': this.forthForm.get('chestFrontCtrl').value,
      'circumference-calf': this.forthForm.get('circumferenceCalfCtrl').value,
      'circumference-legs': this.forthForm.get('circumferenceLegsCtrl').value,
      'circumference-neck': this.forthForm.get('circumferenceNeckCtrl').value,
      'circumference-thigh': this.forthForm.get('circumferenceThighCtrl').value,
      crotch: this.forthForm.get('crotchCtrl').value,
      hip: this.forthForm.get('hipCtrl').value,
      'hip-shirt': this.forthForm.get('hipShirtCtrl').value,
      'length-pant': this.forthForm.get('lengthPantCtrl').value,
      'length-shirt': this.forthForm.get('lengthShirtCtrl').value,
      'length-suit': this.forthForm.get('lengthSuitCtrl').value,
      'shoulder-left': this.forthForm.get('shoulderLeftCtrl').value,
      'shoulder-right': this.forthForm.get('shoulderRightCtrl').value,
      'waist-pant': this.forthForm.get('waistPantCtrl').value,
      'waist-shirt': this.forthForm.get('waistShirtCtrl').value,
      wrist: this.forthForm.get('wristCtrl').value,
    };

    this.data.bodyObjectStorage = this.bodyObj;

    const bodyType = this.onFindBodyType();
    this.data.bodyTypeStorage = bodyType;

    this.router.navigate(['/pages/new-order/step-five']);
  }

  clickInfo(url: string) {
    this.dialogService.open(PopupComponent, {
      context: {
        customImageUrl: url,
      },
    });
  }

  onFindBodyType() {
    const chest = this.forthForm.get('chestFrontCtrl').value;
    const hip = this.forthForm.get('hipCtrl').value;
    const waist = this.forthForm.get('wristCtrl').value;

    const isV = (chest / hip);
    const isH = (hip / chest);
    const isA = (hip / chest);
    const isX = (waist / hip);

    if (isV >= 1.05) {
      return {
        'id': 3,
        'title': 'สามเหลี่ยมตั้ง (V)',
      };
    } else if (isH >= 0.75) {
      return {
        'id': 2,
        'title': 'สี่เหลี่ยม แบบปกติ (H1)',
      };
    } else if (isA >= 1.05) {
      return {
        'id': 1,
        'title': 'สามเหลี่ยมคว่ำ (A)',
      };
    } else if (isX <= 0.75) {
      return {
        'id': 4,
        'title': 'นาฬิกาทราย (X1)',
      };
    } else {
      return {
        'id': 7,
        'title': 'วงกลม (O)',
      };
    }
  }

  onBackPressed() {
    this.router.navigate(['/pages/new-order/step-three']);
  }
}
