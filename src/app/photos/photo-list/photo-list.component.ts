import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PhotoSeervice } from '../photo/photo.service';
import { Photo } from '../photo/photo';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: Photo[] = [];
  filter = '';

  constructor(
    private photoService: PhotoSeervice,
    private activatedRoute: ActivatedRoute
    ) {}

  ngOnInit(): void {
    const userName = this.activatedRoute.snapshot.params.userName;
    this.photoService
      .listFromUser(userName)
      .subscribe(photos => this.photos = photos);

  }
}
