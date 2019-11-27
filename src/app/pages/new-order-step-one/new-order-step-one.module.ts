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
  NbTabsetModule,
  NbUserModule,
} from '@nebular/theme';

import { NewOrderStepOneComponent } from './new-order-step-one.component';

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
    NbTabsetModule,
    NbUserModule,
  ],
  declarations: [
    NewOrderStepOneComponent,
  ],
})
export class NewOrderStepOneModule { }
