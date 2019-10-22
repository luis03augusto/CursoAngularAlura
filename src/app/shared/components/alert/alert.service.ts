import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Alert, AlertType } from './alert';
import { Router, NavigationStart } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

    alertSubject: Subject<Alert> = new Subject<Alert>();
    keepAfterRouterChange = false;

    constructor(router: Router) {
      router.events.subscribe(event => {
        if(event instanceof NavigationStart) {
          if (this.keepAfterRouterChange) {
            this.keepAfterRouterChange = false;
          }else {
            this.clear();
          }
        }
      });
    }

    success(message: string, keepAfterRouterChange: boolean = false) {
      this.alert(AlertType.SUCCESS, message, keepAfterRouterChange);
    }

    danger(message: string, keepAfterRouterChange: boolean = false) {
      this.alert(AlertType.DANGER, message, keepAfterRouterChange);
    }

    info(message: string, keepAfterRouterChange: boolean = false) {
      this.alert(AlertType.INFO, message, keepAfterRouterChange);
    }

    warnig(message: string, keepAfterRouterChange: boolean = false) {
      this.alert(AlertType.WARNING, message, keepAfterRouterChange);
    }

    private alert(alertType: AlertType, message: string, keepAfterRouterChange: boolean){
      this.keepAfterRouterChange = keepAfterRouterChange;
      this.alertSubject.next(new Alert(alertType,message));
    }

    getAlert() {
      return this.alertSubject.asObservable();
    }

    clear() {
      this.alertSubject.next(null);
    }

}
