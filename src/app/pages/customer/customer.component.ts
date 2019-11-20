import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { CustomerService } from '../../shared/customer.service';
import { Customer } from '../../shared/domain';

@Component({
  selector: 'ngx-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
})
export class CustomerComponent implements OnInit {

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
        title: 'Customer ID',
        type: 'number',
      },
      prefix: {
        title: 'Prefix',
        type: 'string',
      },
      name: {
        title: 'First Name',
        type: 'string',
      },
      lastname: {
        title: 'Last Name',
        type: 'string',
      },
      mobile: {
        title: 'Mobile',
        type: 'number',
      },
      'sub-district': {
        title: 'Sub-District',
        type: 'string',
      },
      district: {
        title: 'District',
        type: 'string',
      },
      province: {
        title: 'Province',
        type: 'string',
      },
      post: {
        title: 'Post',
        type: 'number',
      },
      bodytype: {
        title: 'Body Type',
        type: 'string',
      },
    },
  };

  customerList: Customer[];
  source: LocalDataSource = new LocalDataSource();

  constructor(private api: CustomerService) { }

  ngOnInit() {
    this.dataState();
    const s = this.api.GetCustomerList();
    s.snapshotChanges().subscribe(data => {
      this.customerList = [];
      data.forEach(item => {
        const a = item.payload.toJSON();
        a['$key'] = item.key;
        this.customerList.push(a as Customer);
      });
      this.source.load(this.customerList);
    });
  }

  dataState() {
    this.api.GetCustomerList().valueChanges().subscribe();
  }
}
