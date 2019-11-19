import { Component, OnInit } from '@angular/core';
import { SuitColorService } from '../../../shared/suit-color.service';

@Component({
  selector: 'ngx-suit-color',
  templateUrl: './suit-color.component.html',
  styleUrls: ['./suit-color.component.scss'],
})
export class SuitColorComponent implements OnInit {

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
        title: 'ID',
        type: 'number',
      },
      title: {
        title: 'Description',
        type: 'string',
      },
    },
  };

  source: any;

  constructor(private api: SuitColorService) { }

  ngOnInit() {
    this.dataState();
    const s = this.api.GetSuitColorList();
    s.snapshotChanges().subscribe(data => {
    });
  }

  dataState() {
    this.api.GetSuitColorList().valueChanges().subscribe();
  }

}
