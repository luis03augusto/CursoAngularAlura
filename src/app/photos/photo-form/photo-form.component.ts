import { HttpEvent, HttpEventType, HttpResponse } from '@angular/common/http';
import { AlertService } from 'src/app/shared/components/alert/alert.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { Router } from '@angular/router';

import { UserService } from 'src/app/core/user/user.service';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.css']
})
export class PhotoFormComponent implements OnInit {

  photoForm: FormGroup;
  file: File;
  preview: string;
  percentDone = 0;

  constructor(private fotBuilder: FormBuilder,
              private photoService: PhotoService,
              private route: Router,
              private alertServie: AlertService,
              private userService: UserService
              ) { }

  ngOnInit() {
    this.photoForm = this.fotBuilder.group({
      file: ['', Validators.required],
      description: ['', Validators.maxLength(300)],
      allowComments: [true]
    });
  }

  upload() {
    const description = this.photoForm.get('description').value;
    const allowComments = this.photoForm.get('allowComments').value;
    this.photoService
    .upload(description, allowComments, this.file)
    .pipe(finalize(() => {
      this.route.navigate(['/user', this.userService.getUserName()]);
    }))
    .subscribe(
      (event: HttpEvent<any>) => {
      if(event.type == HttpEventType.UploadProgress) {        
        this.percentDone = Math.round(100 * event.loaded / event.total);
      } else if(event instanceof HttpResponse) {
        this.alertServie.success('Uplpoad complete', true);
        }
      }, err => {
        console.log(err);
        this.alertServie.danger('Upload error!', true);       
      });
  }

  handleFile(file: File) {

    this.file = file;
    const reader = new FileReader();
    reader.onload = (event: any) => this.preview = event.targer.result;
    reader.readAsDataURL(file);

  }



}
