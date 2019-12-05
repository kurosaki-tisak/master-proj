import { Component, OnInit } from '@angular/core';
import { RuleBodyTypeSuitPart, BodyType } from '../../shared/domain';
import { RuleBodyTypeSuitPartService } from '../../shared/rule-body-type-suit-part.service';
import { DataproviderService } from '../../dataprovider.service';

@Component({
  selector: 'ngx-new-order-step-five',
  templateUrl: './new-order-step-five.component.html',
  styleUrls: ['./new-order-step-five.component.scss'],
})
export class NewOrderStepFiveComponent implements OnInit {

  ruleBodyTypeList: RuleBodyTypeSuitPart[];
  filteredList: RuleBodyTypeSuitPart[];
  bodyType: BodyType;

  constructor(private data: DataproviderService,
    private ruleBodyTypeAPI: RuleBodyTypeSuitPartService) {

      this.bodyType = this.data.bodyTypeStorage;
      // console.log(this.bodyType);
    }

  ngOnInit() {
    this.onGetRuleBodyTypeState();
  }

  onGetRuleBodyTypeState() {
    const s = this.ruleBodyTypeAPI.GetRuleBodyTypeSuitPartList();
    s.snapshotChanges().subscribe(data => {
      this.ruleBodyTypeList = [];
      data.forEach((obj, index) => {
        const a = obj.payload.toJSON();
        a['$key'] = obj.key;
        this.ruleBodyTypeList.push(a as RuleBodyTypeSuitPart);
      });

      this.filteredList = this.ruleBodyTypeList.filter((v, i) => v['body-type'].id === this.bodyType.id);

      // console.log(this.filteredList);
    });
  }
}
