import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewUser } from './newUser';
import { environment } from '../../../environments/environment'

const API_URL = environment.ApiURL;

@Injectable()
export class SingupService {

  constructor(private http: HttpClient) { }

  checkUserNametaken(userName: string){
    
    return this.http.get(API_URL + '/user/exists' + userName);

  }
  singup(newuser: NewUser){
    return this.http.post(API_URL + '/user/signup', newuser)
  }

}
