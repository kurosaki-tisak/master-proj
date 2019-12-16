import { Component, Input, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
})
export class PopupComponent implements OnInit {

  @Input()
  customImageUrl: string;

  imageUrl: any;

  constructor(protected ref: NbDialogRef<PopupComponent>) {}

  ngOnInit() {
    this.imageUrl = this.customImageUrl;
  }

  dismiss() {
    this.ref.close();
  }
}
