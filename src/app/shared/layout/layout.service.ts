import { Injectable } from "@angular/core";
import { MatSidenav } from "@angular/material/sidenav";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class LayoutService{
    private sidenav !:MatSidenav ;
    public refreshService: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    public setSidenav(matSidenav:MatSidenav){
        this.sidenav = matSidenav;
    }
    public open(){
        this.refreshService.next(true);
        return this.sidenav.open();
    }
    public close(){
        this.refreshService.next(true);
        return this.sidenav.close();
    }

    public toggle(){
                //this.refreshService.next(true);
        return this.sidenav.toggle();
    }
    public getMode(){
        return this.sidenav.mode;
    }
    public isOpened(){
        return this.sidenav.opened;
    }
}