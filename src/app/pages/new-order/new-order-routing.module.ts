import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewOrderComponent } from './new-order.component';
import { SteponeComponent } from './stepone/stepone.component';
import { SteptwoComponent } from './steptwo/steptwo.component';
import { StepthreeComponent } from './stepthree/stepthree.component';
import { StepfourComponent } from './stepfour/stepfour.component';
import { StepfiveComponent } from './stepfive/stepfive.component';

const routes: Routes = [
  {
    path: '',
    component: NewOrderComponent,
    children: [
      {
        path: 'step-one',
        component: SteponeComponent,
      },
      {
        path: 'step-two',
        component: SteptwoComponent,
      },
      {
        path: 'step-three',
        component: StepthreeComponent,
      },
      {
        path: 'step-four',
        component: StepfourComponent,
      },
      {
        path: 'step-five',
        component: StepfiveComponent,
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class NewOrderRoutingModule { }
