import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoDetailComponent } from './photo-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ PhotoDetailComponent ],
  declarations: [PhotoDetailComponent]
})
export class PhotoDetailModule { }
