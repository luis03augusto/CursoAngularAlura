import { Component, OnInit } from '@angular/core';
import { LoadingService } from './loading.service';
import { Observable } from 'rxjs';
import { LoadingType } from './loading-type';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  load$: Observable<string>;
  constructor(private loadService: LoadingService) { }

  ngOnInit() {

    this.load$ = this.loadService
      .getLoading()
      .pipe(map(loadingType => loadingType.valueOf()));

  }
}
