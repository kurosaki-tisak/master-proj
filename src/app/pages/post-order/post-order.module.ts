import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import {
  NbAccordionModule,
  NbButtonModule,
  NbLayoutModule,
  NbCardModule,
  NbIconModule,
  NbCheckboxModule,
  NbListModule,
  NbRouteTabsetModule,
  NbStepperModule,
  NbTabsetModule,
  NbUserModule,
} from '@nebular/theme';

import { PostOrderComponent } from './post-order.component';

@NgModule({
  imports: [
    ThemeModule,
    FormsModule,
    ReactiveFormsModule,
    NbAccordionModule,
    NbButtonModule,
    NbLayoutModule,
    NbCardModule,
    NbIconModule,
    NbCheckboxModule,
    NbListModule,
    NbRouteTabsetModule,
    NbStepperModule,
    NbTabsetModule,
    NbUserModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    PostOrderComponent,
  ],
})

export class PostOrderModule { }
