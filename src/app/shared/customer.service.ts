import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {

  customerList: AngularFireList<any>;    // Reference to Student data list, its an Observable
  customer: AngularFireObject<any>;   // Reference to Student object, its an Observable too

  constructor(private db: AngularFireDatabase) { }

  // Fetch Customer List
  GetCustomerList() {
    this.customerList = this.db.list('user');
    return this.customerList;
  }

  GetCustomer(id: string) {
    this.customer = this.db.object('customer/' + id);
    return this.customer;
  }
}
