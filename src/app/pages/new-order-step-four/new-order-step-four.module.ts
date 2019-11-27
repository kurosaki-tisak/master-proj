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

import { NewOrderStepFourComponent } from './new-order-step-four.component';

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
    NewOrderStepFourComponent,
  ],
})
export class NewOrderStepFourModule { }
