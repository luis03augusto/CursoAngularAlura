import { Component, OnInit, Input } from '@angular/core';
import { PhotoService } from '../../photo/photo.service';
import { Observable } from 'rxjs';
import { PhotoComment } from '../../photo/photo-comment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-photo-comments',
  templateUrl: './photo-comments.component.html',
  styleUrls: ['./photo-comments.component.css']
})
export class PhotoCommentsComponent implements OnInit {

  @Input() photoId: number;
  comments$: Observable<PhotoComment[]>
  commentForm: FormGroup
  constructor(private service: PhotoService,
              private formBuider: FormBuilder) { }

  ngOnInit(): void {
    this.comments$ = this.service.getComments(this.photoId);

    this.commentForm = this.formBuider.group({
      comment: ['', [ Validators.maxLength(300)]]
    })
  }

  save() {
    const comment = this.commentForm.get('comment').value as string;
    this.comments$ = this.service.addComment(this.photoId, comment)
    .pipe(switchMap(() => this.service.getComments(this.photoId)))
    .pipe(tap(() => {
      this.commentForm.reset();
    }));
  }

}
