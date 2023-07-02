import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LoaderService } from "../components/loader/loader.service";
import { Observable, finalize } from "rxjs";

@Injectable()
export class LoadingInterceptor implements HttpInterceptor{
    private totalRequest:number =0;
    constructor(private loaderService:LoaderService){

    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.totalRequest++;
        this.loaderService.setLoading(true);
        return next.handle(req).pipe(
            finalize(()=>{
                this.totalRequest--;
                if(this.totalRequest == 0){
                    this.loaderService.setLoading(false);
                }
            })
        );
    }
}