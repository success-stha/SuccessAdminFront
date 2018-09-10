
import { Injectable } from '@angular/core';
import { User } from '../../models/User';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl: string = "http://localhost:8080/";
  public user = new User();

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(this.baseUrl + 'users');
  }

  deleteUser(id: number) {
    return this.http.delete(this.baseUrl + 'users/' + id);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.baseUrl + 'saveUser', user);
  }

  updateUser(user: User) {
    return this.http.put(this.baseUrl + 'updateUser', user);
  }

  setter(user: User) {
    this.user = user;
  }

  getter() {
    return this.user;
  }
}


