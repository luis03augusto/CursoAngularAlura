import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotFoundComponent } from './not-found/not-found.component';
import { GlobalErrorHandle } from './global-error-handle.ts/global-error-handle.ts';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NotFoundComponent],
  providers: [ 
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandle
    }
]
})
export class ErrosModule { }
