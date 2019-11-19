import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { ShirtRoutingModule } from './shirt-routing.module';
import { ShirtPartComponent } from './shirt-part/shirt-part.component';
import { ShirtComponent } from './shirt.component';

@NgModule({
  imports: [
    ThemeModule,
    ShirtRoutingModule,
  ],
  declarations: [
    ShirtComponent,
    ShirtPartComponent,
  ],
})
export class ShirtModule {
}
