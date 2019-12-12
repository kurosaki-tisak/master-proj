import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  NbAccordionModule,
  NbButtonModule,
  NbCardModule,
  NbIconModule,
  NbCheckboxModule,
  NbListModule,
  NbRouteTabsetModule,
  NbStepperModule,
  NbTabsetModule,
  NbUserModule,
} from '@nebular/theme';
import { NewOrderRoutingModule } from '../new-order/new-order-routing.module';

import { NewOrderComponent } from '../../pages/new-order/new-order.component';
import { PopupComponent } from './popup/popup.component';
import { SteponeComponent } from './stepone/stepone.component';
import { SteptwoComponent } from './steptwo/steptwo.component';
import { StepthreeComponent } from './stepthree/stepthree.component';
import { StepfourComponent } from './stepfour/stepfour.component';
import { StepfiveComponent } from './stepfive/stepfive.component';

@NgModule({
  imports: [
    ThemeModule,
    FormsModule,
    ReactiveFormsModule,
    NbAccordionModule,
    NbButtonModule,
    NbCardModule,
    NbIconModule,
    NbCheckboxModule,
    NbListModule,
    NbRouteTabsetModule,
    NbStepperModule,
    NbTabsetModule,
    NbUserModule,
    NewOrderRoutingModule,
  ],
  declarations: [
    NewOrderComponent,
    PopupComponent,
    SteponeComponent,
    SteptwoComponent,
    StepthreeComponent,
    StepfourComponent,
    StepfiveComponent,
  ],
})
export class NewOrderModule { }
