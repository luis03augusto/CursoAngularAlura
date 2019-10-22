import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PhotoService } from '../photo/photo.service';
import { Photo } from '../photo/photo';
import { Observable } from 'rxjs';
import { PhotoComment } from '../photo/photo-comment';
import { AlertService } from 'src/app/shared/components/alert/alert.service';

@Component({
  selector: 'app-photo-details',
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.css']
})
export class PhotoDetailsComponent implements OnInit {

  photo$: Observable<Photo>;
  comments$: Observable<PhotoComment[]>;
  photoId: number;
  constructor(private route: ActivatedRoute,
              private service: PhotoService,
              private router: Router,
              private alertService: AlertService) { }

  ngOnInit() {    
    this.photoId  = this.route.snapshot.params.photoId;

    this.photo$ = this.service.findById(this.photoId);
  }

  remove() {
    this.service.removePohto(this.photoId)
    .subscribe(() => {
      this.alertService.success('Photo removed', true);
      this.router.navigate(['']);
    },
    err => {
      this.alertService.warnig('Could not delete the photo', true);
    })
  }
}
