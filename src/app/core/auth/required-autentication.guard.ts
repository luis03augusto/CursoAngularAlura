import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { UserService } from '../user/user.service';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root'})
export class RequiresAuthenticationGuard implements CanActivate {

    constructor(private userSerice: UserService,
                private router: Router) {}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {

        if (!this.userSerice.isLogged()) {
            this.router.navigate(['']);
            return false;
        }
        return true;
    }


}