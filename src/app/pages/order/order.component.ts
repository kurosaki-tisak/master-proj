import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { TransactionService } from '../../shared/transaction.service';
import { Order } from '../../shared/domain';

@Component({
  selector: 'ngx-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: 'Transaction ID',
        type: 'number',
      },
      price: {
        title: 'Price',
        type: 'string',
      },
      payment: {
        title: 'Payment',
        type: 'string',
      },
    },
  };

  transactionList: Order[];
  source: LocalDataSource = new LocalDataSource();

  constructor(private api: TransactionService) { }

  ngOnInit() {
    this.dataState();
    const s = this.api.GetCustomerList();
    s.snapshotChanges().subscribe(data => {
      this.transactionList = [];
      data.forEach(item => {
        const a = item.payload.toJSON();
        a['$key'] = item.key;
        this.transactionList.push(a as Order);
      });
      this.source.load(this.transactionList);
    });
  }

  dataState() {
    this.api.GetCustomerList().valueChanges().subscribe();
  }
}
