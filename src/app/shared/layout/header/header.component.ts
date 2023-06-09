import { Component } from '@angular/core';
import { Router, ActivatedRoute, ActivationStart, NavigationEnd } from '@angular/router';
import { filter, startWith } from 'rxjs';
import { LayoutService } from '../layout.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  componentTitle: string='Application Name';
  mode:any;
  isOpened:any;
  constructor(private router: Router, private activatedRoute: ActivatedRoute,private _layoutService:LayoutService) {   
    this.router.events.subscribe(data => {
      if (data instanceof ActivationStart) {
        this.componentTitle = data.snapshot.data['title'];
      }

    });
    this.router.events
   .pipe(
      filter((event) => event instanceof NavigationEnd),
      startWith(this.router)
   )
    

  }

  ngOnInit() {
this._layoutService.refreshService.subscribe((res)=>{
  if(res){
    this.mode = this._layoutService.getMode();
    this.isOpened = this._layoutService.isOpened();
  }
})
    
    this.router.events.subscribe(data => {
      if (data instanceof ActivationStart) {
         console.log(data)
        this.componentTitle = data.snapshot.data['title'];
      }

    });
     
  }
  toggle()
  {
    this._layoutService.toggle();
    this._layoutService.refreshService.next(true);
  }
}
