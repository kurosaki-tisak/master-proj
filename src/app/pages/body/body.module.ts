import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { BodyRoutingModule } from './body-routing.module';
import { BodyComponent } from './body.component';
import { BodyTypeComponent } from './body-type/body-type.component';

@NgModule({
  imports: [
    ThemeModule,
    BodyRoutingModule,
  ],
  declarations: [
    BodyComponent,
    BodyTypeComponent,
  ],
})
export class BodyModule { }
