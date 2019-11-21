import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';

import { OrderModule } from './order/order.module';
import { BillingModule } from './billing/billing.module';
import { CustomerModule } from './customer/customer.module';
import { UserModule } from './user/user.module';
import { NewOrderComponent } from './new-order/new-order.component';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
    OrderModule,
    BillingModule,
    CustomerModule,
    UserModule,
  ],
  declarations: [
    PagesComponent,
    NewOrderComponent,
  ],
})
export class PagesModule {
}
