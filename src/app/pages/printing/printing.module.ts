import { NgModule } from '@angular/core';
import { pdfmake } from 'pdfmake/build/pdfmake';
import { ThemeModule } from '../../@theme/theme.module';
import { PrintingComponent } from '../../pages/printing/printing.component';

@NgModule({
  imports: [
    ThemeModule,
    pdfmake,
  ],
  declarations: [
    PrintingComponent,
  ],
})
export class PrintingModule { }
