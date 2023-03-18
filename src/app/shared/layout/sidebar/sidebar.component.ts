import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  sidenavWidth = 6;  
  increase() {
		this.sidenavWidth = 15;		
	}
	decrease() {
		this.sidenavWidth = 6;		
	}
}
