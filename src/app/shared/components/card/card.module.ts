import { NgModule } from '@angular/core';
import { CardComponent } from './card.comoponent';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [CardComponent],
    exports: [ CardComponent ],
    imports: [ CommonModule ]
})
export class CardModule{

}