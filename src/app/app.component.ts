import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd, RouteReuseStrategy } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter, map, switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
    constructor(private route: ActivatedRoute,
                private tileService: Title,
                private router: Router
                ) { }

    ngOnInit() {
      this.router.events
        .pipe(filter(event => event instanceof NavigationEnd))
        .pipe(map(() => this.route))
        .pipe(map(router => {
            while(router.firstChild) router = router.firstChild;
            return router
        }))
        .pipe(switchMap(route => route.data))
        .subscribe(event => this.tileService.setTitle(event.title));
        
    }
}
