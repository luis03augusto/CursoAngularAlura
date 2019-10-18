import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PhotosModule } from './photos/photos.module';
import { AppRoutingModule } from './app.routing.module';
import { ErrosModule } from './erros/erros.module';
import { Coremodule } from './core/core.module';
import { HomeRoutingModule } from './home/home.routing.module';


@NgModule({
   declarations: [
      AppComponent
   ],
   imports: [
      BrowserModule,
      PhotosModule,
      ErrosModule,
      Coremodule,
      HomeRoutingModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
