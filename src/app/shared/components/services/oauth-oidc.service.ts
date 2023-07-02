import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { OAuthService } from "angular-oauth2-oidc";

@Injectable({
    providedIn:'root'
})
export class OAuthOIDCService{
    private errorDuringBootstrap: any =null;
    constructor(private oauthService:OAuthService ,private router: Router){        
    }
    get claims():any {
        return this.oauthService.getIdentityClaims();
    }
    
}