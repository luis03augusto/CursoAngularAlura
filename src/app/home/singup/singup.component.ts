import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { lowercaseValidator } from 'src/app/shared/validators/lower-case.validator';
import { UserNotTakenValidatorService } from './user-not-taken.validator.service';

@Component({  
  templateUrl: './singup.component.html'  
})
export class SingupComponent implements OnInit {

  sigupForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private userNotTakenValidatorService: UserNotTakenValidatorService) { }

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
  }

}
