import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


import { AuthService } from 'src/app/core/auth/auth.service';
import { PlataformDetectorService } from 'src/app/core/plataform-detector/plataform-detector.service';

@Component({
  templateUrl: './signin.component.html'
})
export class SigInComponent implements OnInit {

  loginForm: FormGroup;
  @ViewChild('userNameInput', {static: false}) userNameInput: ElementRef<HTMLImageElement>;

  constructor(
              private formBuilder: FormBuilder,
              private authService: AuthService,
              private route: Router,
              private platformDetecService: PlataformDetectorService,
              ) {}

 ngOnInit(): void {
  
    this.loginForm = this.formBuilder.group({
        userName: ['', [Validators.required]],
        password: ['', [Validators.required]]
    });
    this.platformDetecService.isPlataformBrowse() &&
      this.userNameInput.nativeElement.focus();
  }

  login() {
    const userName = this.loginForm.get('userName').value;
    const password = this.loginForm.get('password').value;

    this.authService.autheticate(userName, password)
    .subscribe(
      () => this.route.navigate(['user', userName]),
      err => {
        console.log(err);
        this.loginForm.reset();
        this.platformDetecService.isPlataformBrowse() &&
          this.userNameInput.nativeElement.focus();
      }
    );
  }
}
