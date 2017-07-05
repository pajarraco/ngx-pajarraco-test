import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxPajarracoTestComponent } from './ngx-pajarraco-test.component';

@NgModule({
  imports: [
    CommonModule
   ],
  declarations: [
    NgxPajarracoTestComponent
  ],
  providers: [],
  exports:[
    NgxPajarracoTestComponent
  ]
  
})
export class NgxPajarracoTestModule { }
