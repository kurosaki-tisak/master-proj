import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { OrderComponent } from './order/order.component';
import { BillingComponent } from './billing/billing.component';
import { CustomerComponent } from './customer/customer.component';
import { UserComponent } from './user/user.component';
import { NewOrderComponent } from './new-order/new-order.component';
import { NewOrderStepOneComponent } from './new-order-step-one/new-order-step-one.component';
import { NewOrderStepTwoComponent } from './new-order-step-two/new-order-step-two.component';
import { NewOrderStepThreeComponent } from './new-order-step-three/new-order-step-three.component';
import { NewOrderStepFourComponent } from './new-order-step-four/new-order-step-four.component';
import { NewOrderStepFiveComponent } from './new-order-step-five/new-order-step-five.component';
import { PrintingComponent } from './printing/printing.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'suit',
      loadChildren: () => import('./suit/suit.module')
        .then(m => m.SuitModule),
    },
    {
      path: 'shirt',
      loadChildren: () => import('./shirt/shirt.module')
        .then(m => m.ShirtModule),
    },
    {
      path: 'body',
      loadChildren: () => import('./body/body.module')
        .then(m => m.BodyModule),
    },
    {
      path: 'order',
      component: OrderComponent,
    },
    {
      path: 'new-order',
      component: NewOrderComponent,
    },
    {
      path: 'new-order-step-one',
      component: NewOrderStepOneComponent,
    },
    {
      path: 'new-order-step-two',
      component: NewOrderStepTwoComponent,
    },
    {
      path: 'new-order-step-three',
      component: NewOrderStepThreeComponent,
    },
    {
      path: 'new-order-step-four',
      component: NewOrderStepFourComponent,
    },
    {
      path: 'new-order-step-five',
      component: NewOrderStepFiveComponent,
    },
    {
      path: 'billing',
      component: BillingComponent,
    },
    {
      path: 'printing',
      component: PrintingComponent,
    },
    {
      path: 'customer',
      component: CustomerComponent,
    },
    {
      path: 'user',
      component: UserComponent,
    },
    {
      path: 'dashboard',
      component: ECommerceComponent,
    },
    {
      path: 'iot-dashboard',
      component: DashboardComponent,
    },
    {
      path: 'layout',
      loadChildren: () => import('./layout/layout.module')
        .then(m => m.LayoutModule),
    },
    {
      path: 'forms',
      loadChildren: () => import('./forms/forms.module')
        .then(m => m.FormsModule),
    },
    {
      path: 'ui-features',
      loadChildren: () => import('./ui-features/ui-features.module')
        .then(m => m.UiFeaturesModule),
    },
    {
      path: 'modal-overlays',
      loadChildren: () => import('./modal-overlays/modal-overlays.module')
        .then(m => m.ModalOverlaysModule),
    },
    {
      path: 'extra-components',
      loadChildren: () => import('./extra-components/extra-components.module')
        .then(m => m.ExtraComponentsModule),
    },
    {
      path: 'maps',
      loadChildren: () => import('./maps/maps.module')
        .then(m => m.MapsModule),
    },
    {
      path: 'charts',
      loadChildren: () => import('./charts/charts.module')
        .then(m => m.ChartsModule),
    },
    {
      path: 'editors',
      loadChildren: () => import('./editors/editors.module')
        .then(m => m.EditorsModule),
    },
    {
      path: 'tables',
      loadChildren: () => import('./tables/tables.module')
        .then(m => m.TablesModule),
    },
    {
      path: 'miscellaneous',
      loadChildren: () => import('./miscellaneous/miscellaneous.module')
        .then(m => m.MiscellaneousModule),
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
