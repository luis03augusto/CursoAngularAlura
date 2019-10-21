import { Component, OnInit, Input } from '@angular/core';


const cloud = 'http://localhost:5000/imgs';
@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  private _URL = '';
  @Input() description;

  @Input() set url(url: string) {
    if (!url.startsWith('Data')) {
      this._URL = cloud + url;
    } else {
      this._URL = url;
    }
  }

  get url() {
    return this._URL;
  }

  constructor() { }

  ngOnInit() {
  }

}
