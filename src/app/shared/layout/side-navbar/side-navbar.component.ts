import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { IMenu } from '../../core/interfaces/imenu';
import { MenuService } from '../../core/services/menu-service.service';

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.scss']
})
export class SideNavbarComponent {
  menuList: Observable<IMenu[]> = new Observable<IMenu[]>();
  @Input() sidenavWidth=15;
  @Output() toggleMenu = new EventEmitter<boolean>();
  constructor(private httpService: MenuService) { }

  ngOnInit() {
    this.menuList = this.httpService.getList<IMenu>("/assets/menu.json")
  }
}
