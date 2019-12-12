import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';

import { PostOrderComponent } from './post-order.component';

@NgModule({
  imports: [
    ThemeModule,
  ],
  declarations: [
    PostOrderComponent,
  ],
})

export class PostOrderModule { }
