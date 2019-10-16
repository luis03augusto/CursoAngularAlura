import { Injectable } from '@angular/core';

import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

@Injectable({ providendIn : 'root'} )
export class PhotoListResolver implements Resolvever<Observable<Photo[]>> {

    constructor(private service: PhotoService) {}

    resolver(route: ActivatedRouteSnapshot, state:RouterStateSnapshot): Observable<Photo[]> {
        const userName = route.params.userName;
        return this.service.listFromUserPaginated(userName, 1);
    }

}