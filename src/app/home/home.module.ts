import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SigInComponent } from "./signin/SigInComponent";
import { CommonModule } from '@angular/common';


@NgModule({
    declarations: [ SigInComponent ],
    imports: [ 
        CommonModule,
        ReactiveFormsModule
    ]

})
export class HomeModule {}