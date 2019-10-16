import { NgModule } from '@angular/core';
import { PhotosComponent } from './photos/photos.component';
import { PhotoListComponent } from './photo-list.component';
import { LoadButtonComponent } from './load-button/load-button.component';
import { FilterByDescription } from './filter-bydescripition.pipe';
import { PhotoModule } from '../photo/photo.module';
import { CardModule } from 'src/app/shared/components/card/card.module';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component/search.component';
import { DarkenHoverModule } from 'src/app/shared/directives/darken-on-hover/darken-on-hover.module';

@NgModule({
    declarations: [
        PhotoListComponent,
        PhotosComponent,
        LoadButtonComponent,
        FilterByDescription,
        SearchComponent
    ],
    imports: [
        CommonModule,
        PhotoModule,
        CardModule,
        DarkenHoverModule
    ]
})
export  class PhotolistModule { }