import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import {
  NbAccordionModule,
  NbButtonModule,
  NbCardModule,
  NbListModule,
  NbRouteTabsetModule,
  NbStepperModule,
  NbTabsetModule,
  NbUserModule,
} from '@nebular/theme';

import { NewOrderComponent } from '../../pages/new-order/new-order.component';

@NgModule({
  imports: [
    ThemeModule,
    NbAccordionModule,
    NbButtonModule,
    NbCardModule,
    NbListModule,
    NbRouteTabsetModule,
    NbStepperModule,
    NbTabsetModule,
    NbUserModule,
  ],
  declarations: [
    NewOrderComponent,
  ],
})
export class NewOrderModule { }
