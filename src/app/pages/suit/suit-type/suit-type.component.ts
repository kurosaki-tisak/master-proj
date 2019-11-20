import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SuitTypeService } from '../../../shared/suit-type.service';
import { SuitType } from '../../../shared/domain';

@Component({
  selector: 'ngx-suit-type',
  templateUrl: './suit-type.component.html',
  styleUrls: ['./suit-type.component.scss'],
})
export class SuitTypeComponent implements OnInit {

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

  suitTypeList: SuitType[];
  source: LocalDataSource = new LocalDataSource();

  constructor(private api: SuitTypeService) { }

  ngOnInit() {
    this.dataState();
    const s = this.api.GetSuitTypeList();
    s.snapshotChanges().subscribe(data => {
      this.suitTypeList = [];
      data.forEach(item => {
        const a = item.payload.toJSON();
        a['$key'] = item.key;
        this.suitTypeList.push(a as SuitType);
      });
    });
   // this.source.load(this.suitTypeList);
  }

  dataState() {
    this.api.GetSuitTypeList().valueChanges().subscribe();
  }

}
