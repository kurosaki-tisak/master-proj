import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { BillingComponent } from './billing.component';

@NgModule({
  imports: [
    ThemeModule,
  ],
  declarations: [
    BillingComponent,
  ],
})
export class BillingModule {
}
