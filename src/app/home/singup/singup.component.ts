import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { lowercaseValidator } from 'src/app/shared/validators/lower-case.validator';
import { UserNotTakenValidatorService } from './user-not-taken.validator.service';
import { NewUser } from './newUser';
import { SingupService } from './singup.service';
import { Router } from '@angular/router';
import { PlataformDetectorService } from 'src/app/core/plataform-detector/plataform-detector.service';

@Component({  
  templateUrl: './singup.component.html',
  providers: [ UserNotTakenValidatorService ]
})
export class SingupComponent implements OnInit {

  sigupForm: FormGroup;
  @ViewChild('inputEmail') inputEmail: ElementRef<HTMLInputElement>;

  constructor(private formBuilder: FormBuilder,
              private userNotTakenValidatorService: UserNotTakenValidatorService,
              private route : Router,
              private plataformDetectorservice: PlataformDetectorService,
              private singupservice: SingupService) { }             

  ngOnInit() {    
    this.sigupForm = this.formBuilder.group({
      email: ['', [
          Validators.required, 
          Validators.email
        ]
      ],
      fullName: ['',[
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(40),
        ]
      ],
      userName: ['',[
          Validators.required,
          lowercaseValidator,
          Validators.minLength(2),
          Validators.maxLength(30)
        ],
        this.userNotTakenValidatorService.checkUserNameTaken()
      ],
      password: ['',[
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(14)
        ]
      ]
    })   
    this.plataformDetectorservice.isPlataformBrowse() &&
    this.inputEmail.nativeElement.focus();
  }
  signup() {
    const newUser = this.sigupForm.getRawValue() as NewUser;
    this.singupservice
      .singup(newUser)
      .subscribe(() => this.route.navigate([''])
      ,err => console.log(err)
    );
  }
}
