import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { Observable } from 'rxjs';
import { User } from '../user/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user$: Observable<User>;

  constructor(private route: Router,
              private userService: UserService) { 
    this.user$ = userService.getUser();
  }

  logout() {
    this.userService.logout();
    this.route.navigate(['']);
  }

  ngOnInit() {
  }

}
