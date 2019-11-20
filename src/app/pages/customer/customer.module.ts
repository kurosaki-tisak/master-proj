import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { NbCardModule, NbIconModule, NbInputModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { CustomerComponent } from './customer.component';

@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,
    NbIconModule,
    NbInputModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    CustomerComponent,
  ],
})
export class CustomerModule { }
