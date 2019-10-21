import { Directive, ElementRef, OnInit } from '@angular/core';
import { PlataformDetectorService } from 'src/app/core/plataform-detector/plataform-detector.service';

@Directive({
    selector: '[immediateClick]'
})
export class ImmediateCLickDirective implements OnInit {

    constructor(private element: ElementRef<any>,
                private plataFormDetector: PlataformDetectorService ) { }

        ngOnInit(): void {
            this.plataFormDetector.isPlataformBrowse &&
                this.element.nativeElement.click();
        }

}