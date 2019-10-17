import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vmessage',
  templateUrl: './vmesage.component.html'
})
export class VmesageComponent implements OnInit {

  @Input() text = '';
  constructor() { }

  ngOnInit() {
  }

}
