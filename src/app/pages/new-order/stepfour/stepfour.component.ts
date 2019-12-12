import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import * as _ from 'lodash';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbStepperComponent } from '@nebular/theme';
import { DataproviderService } from '../../../dataprovider.service';

@Component({
  selector: 'ngx-stepfour',
  templateUrl: './stepfour.component.html',
  styleUrls: ['./stepfour.component.scss'],
})
export class StepfourComponent implements OnInit {

  @ViewChild('stepper', { static: true }) stepper: NbStepperComponent;
  @ViewChild('circumferenceNeck', { static: false }) circumferenceNeck: ElementRef;
  @ViewChild('chest', { static: false }) chest: ElementRef;
  @ViewChild('chestFront', { static: false }) chestFront: ElementRef;
  @ViewChild('chestBack', { static: false }) chestBack: ElementRef;
  @ViewChild('armLenghtRight', { static: false }) armLenghtRight: ElementRef;
  @ViewChild('armLenghtLeft', { static: false }) armLenghtLeft: ElementRef;
  @ViewChild('armMuscles', { static: false }) armMuscles: ElementRef;
  @ViewChild('circumferenceCalf', { static: false }) circumferenceCalf: ElementRef;
  @ViewChild('circumferenceLegs', { static: false }) circumferenceLegs: ElementRef;
  @ViewChild('circumferenceThigh', { static: false }) circumferenceThigh: ElementRef;
  @ViewChild('lengthPant', { static: false }) lengthPant: ElementRef;
  @ViewChild('waistShirt', { static: false }) waistShirt: ElementRef;
  @ViewChild('waistPant', { static: false }) waistPant: ElementRef;
  @ViewChild('wrist', { static: false }) wrist: ElementRef;
  @ViewChild('crotch', { static: false }) crotch: ElementRef;
  @ViewChild('bellyRound', { static: false }) bellyRound: ElementRef;
  @ViewChild('hip', { static: false }) hip: ElementRef;
  @ViewChild('hipShirt', { static: false }) hipShirt: ElementRef;
  @ViewChild('lengthShirt', { static: false }) lengthShirt: ElementRef;
  @ViewChild('lengthSuit', { static: false }) lengthSuit: ElementRef;

  forthForm: FormGroup;

  constructor(private fb: FormBuilder,
    private data: DataproviderService,
    private router: Router) { }

  ngOnInit() {
    this.forthForm = this.fb.group({
      circumferenceNeckCtrl: ['', Validators.required],
      chestCtrl: ['', Validators.required],
      chestFrontCtrl: ['', Validators.required],
      chestBackCtrl: ['', Validators.required],
      armLenghtRightCtrl: ['', Validators.required],
      armLenghtLeftCtrl: ['', Validators.required],
      armMusclesCtrl: ['', Validators.required],
      circumferenceCalfCtrl: ['', Validators.required],
      circumferenceLegsCtrl: ['', Validators.required],
      circumferenceThighCtrl: ['', Validators.required],
      lengthPantCtrl: ['', Validators.required],
      waistShirtCtrl: ['', Validators.required],
      waistPantCtrl: ['', Validators.required],
      wristCtrl: ['', Validators.required],
      crotchCtrl: ['', Validators.required],
      hipCtrl: ['', Validators.required],
      hipShirtCtrl: ['', Validators.required],
      lengthShirtCtrl: ['', Validators.required],
      lengthSuitCtrl: ['', Validators.required],
    });
  }

  onForthSubmit() {
    const bodyType = this.onFindBodyType();
    this.data.bodyTypeStorage = bodyType;

    this.router.navigate(['/pages/new-order/step-five']);
  }

  onFindBodyType() {
    const chest = this.chestFront.nativeElement.value;
    const hip = this.hip.nativeElement.value;
    const waist = this.waistPant.nativeElement.value;

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
