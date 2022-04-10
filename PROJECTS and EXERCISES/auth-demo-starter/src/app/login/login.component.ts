import { AuthService } from "./../services/auth.service";
import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent {
  invalidLogin: boolean = false;

  // NOTE: In order to access route parameters, we need to inject the activated route service.
  constructor(
    private readonly _router: Router,
    private readonly _authService: AuthService,
    private readonly _route: ActivatedRoute
  ) {}

  signIn(credentials) {
    this._authService.login(credentials).subscribe((result) => {
      if (result) {
        // NOTE: Now here wecan safely use the snapshot, because on this login page,
        // we don't have a link or a button that takes the user to the same page.
        // In other words, we don't need to subscribe to the query paramMap observable.
        let returnUrl = this._route.snapshot.queryParamMap.get("returnUrl");

        // navigate to returnUrl if you have a returnUrl in your route parameters,
        // otherwise, navigate to the homepage.
        this._router.navigate([returnUrl || "/"]);
      } else {
        this.invalidLogin = true;
      }
    });
  }
}
