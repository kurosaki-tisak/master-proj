import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SuitComponent } from './suit.component';
import { SuitColorComponent } from './suit-color/suit-color.component';
import { SuitPartComponent } from './suit-part/suit-part.component';
import { SuitTypeComponent } from './suit-type/suit-type.component';

const routes: Routes = [
  {
    path: '',
    component: SuitComponent,
    children: [
      {
        path: 'suit-color',
        component: SuitColorComponent,
      },
      {
        path: 'suit-part',
        component: SuitPartComponent,
      },
      {
        path: 'suit-type',
        component: SuitTypeComponent,
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
export class SuitRoutingModule {
}
