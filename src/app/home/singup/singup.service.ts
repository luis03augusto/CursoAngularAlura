import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_URL = "Http://localhost:3000"
@Injectable({
  providedIn: 'root'
})
export class SingupService {

  constructor(private http: HttpClient) { }

  checkUserNametaken(userName: string){
    
    return this.http.get(API_URL + '/user/exists' + userName);

  }

}
