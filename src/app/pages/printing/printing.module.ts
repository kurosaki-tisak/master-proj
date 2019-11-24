import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { PrintingComponent } from '../../pages/printing/printing.component';

@NgModule({
  imports: [
    ThemeModule,
  ],
  declarations: [
    PrintingComponent,
  ],
})
export class PrintingModule { }
