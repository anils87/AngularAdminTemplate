import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { IMenu } from '../../core/interfaces/imenu';
import { MenuService } from '../../core/services/menu-service.service';
import { MatSidenav } from '@angular/material/sidenav';
import { LayoutService } from '../layout.service';

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.scss']
})
export class SideNavbarComponent {
  menuList: Observable<IMenu[]> = new Observable<IMenu[]>();
  @Input() sidenavWidth=15;
  @Output() toggleMenu = new EventEmitter<boolean>();
  @Output() isActiveChange = new EventEmitter<boolean>();
  @Input() inputSideNav!: MatSidenav;
  mode:any;
  opened:any;
  subMenuPath:string='';
  constructor(private httpService: MenuService,private _layoutService:LayoutService) { 
    
  }

  ngOnInit() {
    this.menuList = this.httpService.getList<IMenu>("/assets/menu.json")
  }
  ngAfterViewInit(){
    // console.log(this.inputSideNav);
    // console.log(this.inputSideNav.mode);
    // this.mode = this._layoutService.getMode();
    // this.opened = this._layoutService.isOpened();
  }
  toggle(){
    this._layoutService.toggle();
  }
  getSubMenuAbsolutePath(){
    const url= document.location.pathname;
    this.subMenuPath = url.split('/').at(1)?.toString()!;
  }
}
