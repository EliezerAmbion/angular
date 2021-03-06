import { map } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { JwtHelper } from "angular2-jwt";

@Injectable()
export class AuthService {
  constructor(private http: Http) {}

  login(credentials) {
    return this.http
      .post("/api/authenticate", JSON.stringify(credentials))
      .pipe(
        map((response: any) => {
          // console.log(response);
          //NOTE: could be refactored. Instead of storing the response to a variable, use response instead.
          let result = response;
          if (result && result._body.token) {
            localStorage.setItem("token", result._body.token);
            return true;
          }
          return false;
        })
      );
  }

  logout() {
    localStorage.removeItem("token");
  }

  isLoggedIn() {
    let jwtHelper = new JwtHelper();
    let token = localStorage.getItem("token");

    if (!token) return false;

    let expirationDate = jwtHelper.getTokenExpirationDate(token);
    let isExpired = jwtHelper.isTokenExpired(token);

    return !isExpired;
  }

  get currentUser() {
    let token = localStorage.getItem("token");
    if (!token) return null;

    return new JwtHelper().decodeToken(token);
  }
}
