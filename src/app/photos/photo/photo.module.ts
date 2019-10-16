import { NgModule } from '@angular/core';
import { PhotoComponent } from './photo.component';
import { HttpClient } from 'selenium-webdriver/http';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [PhotoComponent],
    imports: [
        CommonModule,
        HttpClient
    ],
    export: [PhotoComponent]
})
export class PhotoModule {}