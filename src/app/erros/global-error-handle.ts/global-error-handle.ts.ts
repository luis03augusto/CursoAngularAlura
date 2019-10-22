import { ErrorHandler } from '@angular/core';
import * as StackTrace from 'stacktrace-js';

export class GlobalErrorHandle implements ErrorHandler {
    
    handleError(error: any): void {
        StackTrace
            .fromError(error)
            .then(StackFrames => {
                const stack = StackFrames
                    .map(sf => sf.toString())
                    .join('\n');
                console.log(stack);
            });
    }

}