import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable, catchError, throwError } from "rxjs";
import { APIResponse } from "../core/interfaces/iapiresponse";

export class HttpErrorInterceptor implements HttpInterceptor{
    constructor(){

    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req)
        .pipe(
            catchError((error:HttpErrorResponse)=>{
                let errorMessage='';
                if(error.error instanceof ErrorEvent){
                    // Client Side Error
                    errorMessage = `Error: ${error.error.message}`;
                }
                else{
                    // Server Side error
                    errorMessage = `Error Status: ${error.status}\nMessage: ${error.message}`;
                }
                let resultError = error.message;
                let response= <APIResponse>JSON.parse(JSON.stringify(error.error));
                if(response.message !=null && response.message != undefined)
                    resultError = response.message;
                // throw message to FE using error service

                return throwError(errorMessage);
            })
        );
    }
}