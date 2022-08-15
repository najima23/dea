import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUser() {
    return this.http.get("http://localhost:3000/user");
  }

  getOneUser() {
    return this.http.get("http://localhost:3000/user/current");
  }

}
