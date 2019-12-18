import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {

  transactionList: AngularFireList<any[]>;    // Reference to data list, its an Observable
  transaction: AngularFireObject<any>;   // Reference to object, its an Observable too

  constructor(private db: AngularFireDatabase) { }

  // Fetch Customer List
  GetCustomerList() {
    this.transactionList = this.db.list('transaction');
    return this.transactionList;
  }

  GetCustomer(id: string) {
    this.transaction = this.db.object('transaction/' + id);
    return this.transaction;
  }

  PostOrder(item: any) {
    const ref = this.db.list('transaction');
    return ref.push(item);
  }
}
