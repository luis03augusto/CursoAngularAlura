import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PhotoService } from '../photo/photo.service';
import { Router } from '@angular/router';
import { subscribeOn } from 'rxjs/operators';

@Component({
  selector: 'app-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.css']
})
export class PhotoFormComponent implements OnInit {

  photoForm: FormGroup;
  file: File;
  preview: string;

  constructor(private fotBuilder: FormBuilder,
              private photoService: PhotoService,
              private route: Router
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
    this.photoService.upload(description, allowComments, this.file)
    .subscribe(() => this.route.navigate(['']));

  }

  handleFile(file: File) {

    this.file = file;
    const reader = new FileReader();
    reader.onload = (event: any) => this.preview = event.targer.result;
    reader.readAsDataURL(file);

  }



}
