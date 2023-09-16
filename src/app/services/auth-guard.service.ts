import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, Router } from "@angular/router";


@Injectable({
    providedIn: 'root'
})

export class AuthGuardService {

    constructor(private _route: Router) {
    }
    canActivate(route: ActivatedRouteSnapshot) {
        this._route.navigate(['/home']);
    }

}