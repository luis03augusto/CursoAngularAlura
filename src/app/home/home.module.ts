import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SigInComponent } from './signin/signin.component';


@NgModule({
    declarations: [ SigInComponent ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ]

})
export class HomeModule { }