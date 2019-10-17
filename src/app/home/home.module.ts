import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SigInComponent } from './signin/signin.component';
import { VMessageModule } from '../shared/components/vmesage/vmessage/vmessage.module';
import { RouterModule } from '@angular/router';
import { SingupComponent } from './singup/singup.component';


@NgModule({
    declarations: [ 
        SigInComponent,
        SingupComponent
     ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        VMessageModule,
        RouterModule,
        FormsModule
    ]

})
export class HomeModule { }