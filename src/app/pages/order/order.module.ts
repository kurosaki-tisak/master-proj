import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { NbCardModule, NbIconModule, NbInputModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { OrderComponent } from './order.component';

@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,
    NbIconModule,
    NbInputModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    OrderComponent,
  ],
})
export class OrderModule { }
