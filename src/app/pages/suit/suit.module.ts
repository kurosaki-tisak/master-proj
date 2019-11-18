import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { SuitRoutingModule } from './suit-routing.module';
import { SuitComponent } from './suit.component';
import { SuitColorComponent } from './suit-color/suit-color.component';
import { SuitPartComponent } from './suit-part/suit-part.component';
import { SuitTypeComponent } from './suit-type/suit-type.component';

@NgModule({
  imports: [
    ThemeModule,
    SuitRoutingModule,
  ],
  declarations: [
    SuitComponent,
    SuitColorComponent,
    SuitPartComponent,
    SuitTypeComponent,
  ],
})
export class SuitModule { }
