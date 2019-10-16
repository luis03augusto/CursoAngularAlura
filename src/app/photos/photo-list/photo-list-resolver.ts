import { Injectable } from '@angular/core';

import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';
import { Observable } from 'rxjs';
import { RouterStateSnapshot, ActivatedRouteSnapshot, Resolve } from '@angular/router';

@Injectable({ providedIn : 'root'} )
export class PhotoListResolver implements Resolve<Observable<Photo[]>> {

    constructor(private service: PhotoService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Photo[]> {
        const userName = route.params.userName;
        return this.service.listFromUserPaginated(userName, 1);
    }

}