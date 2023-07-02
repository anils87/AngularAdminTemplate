import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { OAuthService } from "angular-oauth2-oidc";
import { Observable } from "rxjs";

@Injectable()
export class AuthInterceptorService implements HttpInterceptor{
    constructor(public oAuthService: OAuthService){}
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token:string = this.oAuthService.getIdToken();
        if(token !== undefined && token !== null && token.length !==0 ){
            const reqWithToken = req.clone({
                headers: req.headers.set('Authorization','Bearer '+ token)                
            });
            return next.handle(reqWithToken);
        }

        return next.handle(req);
    }
    
}