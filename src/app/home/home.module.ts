import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SigInComponent } from './signin/signin.component';
import { VMessageModule } from '../shared/components/vmesage/vmessage/vmessage.module';
import { RouterModule } from '@angular/router';
import { SingupComponent } from './singup/singup.component';
import { HomeComponent } from './home.component';
import { SingupService } from './singup/singup.service';


@NgModule({
    declarations: [
        SigInComponent,
        SingupComponent,
        HomeComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        VMessageModule,
        RouterModule,
        FormsModule
    ],
    providers: [
        SingupService
    ]

})
export class HomeModule { }