import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { authService } from "./auth.service";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthGaurd implements CanActivate{
    constructor(private authService:authService){}

    canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        return this.authService.isAuthenticated(); 
    }

}