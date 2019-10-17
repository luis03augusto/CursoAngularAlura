import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PhotosModule } from './photos/photos.module';
import { AppRoutingModule } from './app.routing.module';
import { ErrosModule } from './erros/erros.module';
import { HomeModule } from './home/home.module';
import { VMessageModule } from './shared/components/vmesage/vmessage/vmessage.module';
import { Coremodule } from './core/core.module';


@NgModule({
   declarations: [
      AppComponent
   ],
   imports: [
      BrowserModule,
      PhotosModule,
      AppRoutingModule,
      ErrosModule,
      HomeModule,
      Coremodule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
