import { Injectable } from '@angular/core';
import { SingupService } from './singup.service';
import { AbstractControl } from '@angular/forms';
import { debounceTime, switchMap, map, first } from 'rxjs/operators';


@Injectable()
export class UserNotTakenValidatorService {
    
    constructor(private sigUpService: SingupService){}

    checkUserNameTaken() {

        return (control: AbstractControl) => {
            return control
            .valueChanges
            .pipe(debounceTime(300))
            .pipe(switchMap(userName => 
                 this.sigUpService.checkUserNametaken(userName)
            ))
            .pipe(map(isTaken => isTaken ? { userNameTaken: true} : null))
            .pipe(first());
        }
    }
}