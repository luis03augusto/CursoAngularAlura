import { NgModule } from '@angular/core';

import { PhotoModule } from './photo/photo.module';
import { PhotoFormModule } from './photo-form/photo-form.module';
import { PhotolistModule } from './photo-list/photo-list.module';
import { HomeModule } from '../home/home.module';
import { DarkenHoverModule } from '../shared/directives/darken-on-hover/darken-on-hover.module';
import { PhotoDetailsModule } from './photo-details/photo-details.module';

@NgModule({
    imports: [
        PhotoModule,
        PhotoFormModule,
        PhotolistModule,        
        DarkenHoverModule,
        PhotoDetailsModule
    ]
})

export class PhotosModule {

}
