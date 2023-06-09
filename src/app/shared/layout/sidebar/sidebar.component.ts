import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { LayoutService } from '../layout.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  sidenavWidth = 15;  
  @ViewChild(MatSidenav) sidenav !: MatSidenav
  constructor(private _observer: BreakpointObserver,private _layoutService:LayoutService){

  }
ngAfterViewInit(){
    this._observer.observe(['(max-width: 800px)']).subscribe((res)=>{
      if(res.matches){                
        this.sidenav.mode='over';
        this.sidenav.close();                
      }
      else{
        this.sidenav.mode='side';
        this.sidenav.open();                
      }                  
      this._layoutService.setSidenav(this.sidenav);
      this._layoutService.refreshService.next(true);
    })
  }
  showHide(flag:Boolean){
    if(flag)
      this.increase();
    else
      this.decrease();
  }
  increase() {
		this.sidenavWidth = 15;		
	}
	decrease() {
		this.sidenavWidth = 6;		
	}
}
