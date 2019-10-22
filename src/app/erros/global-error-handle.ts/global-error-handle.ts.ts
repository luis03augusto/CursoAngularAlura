import { ErrorHandler } from '@angular/core';
import { throwError } from 'rxjs';

export class GlobalErrorHandle implements ErrorHandler {
    
    handleError(error: any): void {
        throw error;
    }

}