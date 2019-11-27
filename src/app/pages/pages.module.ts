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
import { NewOrderModule } from './new-order/new-order.module';
import { PrintingModule } from './printing/printing.module';
import { NewOrderStepOneModule } from './new-order-step-one/new-order-step-one.module';
import { NewOrderStepTwoModule } from './new-order-step-two/new-order-step-two.module';
import { NewOrderStepThreeModule } from './new-order-step-three/new-order-step-three.module';
import { NewOrderStepFourModule } from './new-order-step-four/new-order-step-four.module';
import { NewOrderStepFiveModule } from './new-order-step-five/new-order-step-five.module';

import { DataproviderService } from '../dataprovider.service';

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
    NewOrderModule,
    NewOrderStepOneModule,
    NewOrderStepTwoModule,
    NewOrderStepThreeModule,
    NewOrderStepFourModule,
    NewOrderStepFiveModule,
    PrintingModule,
  ],
  declarations: [
    PagesComponent,
  ],
  providers: [
    DataproviderService,
  ],
})
export class PagesModule {
}
