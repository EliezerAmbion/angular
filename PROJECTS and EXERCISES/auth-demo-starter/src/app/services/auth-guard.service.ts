import { AuthService } from "./auth.service";
import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from "@angular/router";
import { Observable } from "rxjs/Observable";

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(
    private readonly _authService: AuthService,
    private readonly _router: Router
  ) {}

  // NOTE: canActivate taked two parameters, one is route, and the other is state.
  // State parameter is of type RouterStateSnapshot
  // REMEMBER: with the state paramter, we can get access to the URL that the user wanted to access.
  canActivate(route, state: RouterStateSnapshot) {
    if (this._authService.isLoggedIn()) return true;

    // REMEMBER: in the parameters array of navigate, the first element is the path,
    // second element is an object with one property.
    this._router.navigate(["/login"], {
      queryParams: { returnUrl: state.url },
    });
    return false;
  }
}
