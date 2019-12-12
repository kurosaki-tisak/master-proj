import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';

import { NewDashboardComponent } from '../../pages/new-dashboard/new-dashboard.component';

@NgModule({
  imports: [
    ThemeModule,
  ],
  declarations: [
    NewDashboardComponent,
  ],
})

export class NewDashboardModule { }
