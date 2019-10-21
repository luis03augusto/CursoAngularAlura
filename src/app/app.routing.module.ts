import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { NotFoundComponent } from './erros/not-found/not-found.component';
import { PhotoListResolver } from './photos/photo-list/photo-list-resolver';
import { PhotoDetailsModule } from './photos/photo-details/photo-details.module';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    { 
        path: 'home',
        loadChildren: './home/home.modele#HomeModule'        
    },    
    { path: 'user/:userName', component: PhotoListComponent,
        resolve : {
            photos: PhotoListResolver
        }
     },
    { path: 'p/add', component: PhotoFormComponent },
    { path: 'p/:photoId', component: PhotoDetailsModule },
    { path: '**', component: NotFoundComponent }

];

@NgModule({
    imports: [ RouterModule.forRoot(routes, {useHash: true}) ],
    exports: [RouterModule]
})

export class AppRoutingModule { }
