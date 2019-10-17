import { Injectable } from '@angular/core';
import { SingupService } from './singup.service';
import { AbstractControl } from '@angular/forms';

@Injectable({ providedIn: 'root'})
export class UserNotTakenValidatorService {
    
    constructor(private sigUpService: SingupService){}

    checkUserNameTaken() {

        return (control: AbstractControl) => {
            return null;
        }
    }
}