import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { Admin } from '../shared/admin';
import { User } from '../shared/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) {}

  isAuthUser() {
    if (localStorage.getItem("userID")) {
      return localStorage.getItem("userID");
    } else {
      return null;
    }
  }

  isAuthAdmin() {
    if (localStorage.getItem("adminID")) {
      return localStorage.getItem("adminID");
    } else {
      return null;
    }
  }

  logout() {
    localStorage.clear();
  }

  loginUser(email: string, password: string): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      }),
    };

    return this.http
      .post<User>("/api/login", { email, password }, httpOptions)
      .pipe(
        map((user) => {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem("userID", JSON.stringify(user[0].id));
          return user;
        })
      );
  }
  loginAdmin(email: string, password: string): Observable<Admin> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      }),
    };

    return this.http
      .post<Admin>(
        "/api/admins/login",
        { email, password },
        httpOptions
      )
      .pipe(
        map((admin) => {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem("adminID", JSON.stringify(admin[0].id));
          return admin;
        })
      );
  }
}
