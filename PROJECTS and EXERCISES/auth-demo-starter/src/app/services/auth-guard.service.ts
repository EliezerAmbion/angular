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
  // NOTE: in order to check to see if the user is looged in or not, we need to inject our authService
  // NOTE: in order for us to navigate the user to the login page, we need to inject the router service.
  constructor(
    private readonly _authService: AuthService,
    private readonly _router: Router
  ) {}

  // NOTE: canActivate - in this method we need to check to see if the user is logged in or not.
  // If they're logged in we're going to return true.
  // Otherwise we should navigate the user to the login page, and return false.
  canActivate() {
    if (this._authService.isLoggedIn()) return true;

    // REMEMBER: in the parameters array of navigate, the first element is the path,
    // second element is optional.

    // NOTE: you can navigate a user to anywhere but the login page would be the best.
    this._router.navigate(["/login"]);
    return false;
  }
}
