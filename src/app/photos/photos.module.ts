import { NgModule } from '@angular/core';

import { PhotoModule } from './photo/photo.module';
import { PhotoFormModule } from './photo-form/photo-form.module';
import { PhotolistModule } from './photo-list/photo-list.module';
import { HomeModule } from '../home/home.module';

@NgModule({
    imports: [
        PhotoModule,
        PhotoFormModule,
        PhotolistModule,
        HomeModule
    ]
})

export class PhotosModule {

}
