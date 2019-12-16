import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { LocalDataSource } from 'ng2-smart-table';
import { Router } from '@angular/router';
import { Customer, BodyObj, Transaction, Payment, MockRecommed } from '../../shared/domain';
import { DataproviderService } from '../../dataprovider.service';
import { TransactionService } from '../../shared/transaction.service';

@Component({
  selector: 'ngx-post-order',
  templateUrl: './post-order.component.html',
  styleUrls: ['./post-order.component.scss'],
})
export class PostOrderComponent implements OnInit {

  bodyType: any;
  bodyObj: any;
  eventType: any;
  suitType: any;
  suitColor: any;
  recommenedSuit: any;

  orderForm: FormGroup;
  firstNameCtrl: FormControl;
  lastNameCtrl: FormControl;
  addressCtrl: FormControl;
  subDistrictCtrl: FormControl;
  districtCtrl: FormControl;
  provinceCtrl: FormControl;
  postCtrl: FormControl;
  telCtrl: FormControl;

  customerObj: Customer;
  transactionObj: Transaction;
  paymentObj: Payment;

  source: LocalDataSource = new LocalDataSource();
  sourceList: any;

  settings = {
    actions: false,
    hideSubHeader: true,
    columns: {
      title: {
        title: 'Title',
        type: 'string',
      },
      description: {
        title: 'Description',
        type: 'string',
      },
    },
  };

  settingsPayment = {
    actions: false,
    hideSubHeader: true,
    columns: {
      title: {
        title: '',
        type: 'string',
      },
    },
  };

  constructor(private db: DataproviderService,
    private api: TransactionService,
    private fb: FormBuilder,
    private router: Router) {

    this.bodyType = this.db.bodyTypeStorage;
    this.bodyObj = this.db.bodyObjectStorage;
    this.eventType = this.db.selectedEventTypeStorage;
    this.suitType = this.db.selectedSuitTypeStorage;
    this.suitColor = this.db.selectedSuitColorStorage;
    this.recommenedSuit = this.db.selectedRecommendedSuit;
  }

  ngOnInit() {
    this.orderForm = this.fb.group({
      firstNameCtrl: ['', Validators.required],
      lastNameCtrl: ['', Validators.required],
      addressCtrl: ['', Validators.required],
      subDistrictCtrl: ['', Validators.required],
      districtCtrl: ['', Validators.required],
      provinceCtrl: ['', Validators.required],
      postCtrl: ['', Validators.required],
      telCtrl: ['', Validators.required],
    });


    this.paymentObj = {
      method: 'cash',
      price: '100,000',
    };

    const pre = this.recommenedSuit;
    this.sourceList = [];
    pre.forEach(item => {
      const result = [];
      const p = (item as MockRecommed)['suit-part'];
      p.forEach(o => {
        const obj = {
          title: o.title,
          description: o.sub[0].title,
        };
        result.push(obj);
      });

      const objResut = {
        source: result,
      };

      this.sourceList.push(objResut);
    });
  }

  onInitCustomerBody() {
  }

  onPostOrderSubmit() {
    this.customerObj = {
      id: '',
      prefix: '',
      name: this.orderForm.get('firstNameCtrl').value,
      lastname: this.orderForm.get('lastNameCtrl').value,
      address: this.orderForm.get('addressCtrl').value,
      'sub-district': this.orderForm.get('subDistrictCtrl').value,
      district: this.orderForm.get('districtCtrl').value,
      province: this.orderForm.get('provinceCtrl').value,
      mobile: this.orderForm.get('telCtrl').value,
      bodytype: this.db.bodyTypeStorage,
      'body-obj': this.db.bodyObjectStorage as BodyObj,
    };

    this.transactionObj = {
      id: 1,
      customer: this.customerObj,
      order: this.recommenedSuit,
      payment: this.paymentObj,
    };

    this.api.PostOrder(this.transactionObj);
  }

  onBackPressed() {
    this.router.navigate(['/pages/new-order/step-five']);
  }
}

