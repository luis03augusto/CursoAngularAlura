import { Injectable } from '@angular/core';
import { TokenService } from '../token/token.service';
import { BehaviorSubject } from 'rxjs';
import * as jwt_decode from 'jwt-decode';


import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject = new BehaviorSubject<User>(null);
  private userName: string;

  constructor(private tokenService: TokenService) { 

    this.tokenService.hasToken() &&
     this.decondeAndNotify()

  }

  setToken(token: string) {
    this.tokenService.setToken(token);
    this.decondeAndNotify();
  }

  private decondeAndNotify() {
      const token = this.tokenService.getToken();
      const user = jwt_decode(token) as User;
      this.userName = user.name;
      this.userSubject.next(user);
  }

  getUser() {
    return this.userSubject.asObservable();
  }

  logout() {
    this.tokenService.removeToken();
    this.userSubject.next(null);
  }

  isLogged() {
    return this.tokenService.hasToken();
  }

  getUserName() {
    return this.userName
  }
}
