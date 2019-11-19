import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { OrderComponent } from './order.component';

@NgModule({
  imports: [
    ThemeModule,
  ],
  declarations: [
    OrderComponent,
  ],
})
export class OrderModule { }
