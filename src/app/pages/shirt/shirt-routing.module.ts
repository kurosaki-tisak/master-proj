import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShirtComponent } from './shirt.component';
import { ShirtPartComponent } from './shirt-part/shirt-part.component';

const routes: Routes = [
  {
    path: '',
    component: ShirtComponent,
    children: [
      {
        path: 'shirt-part',
        component: ShirtPartComponent,
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
export class ShirtRoutingModule {
}
