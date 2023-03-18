import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MaterialModule } from "./material/material.module";
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { SideNavbarComponent } from './layout/side-navbar/side-navbar.component';
import { FooterComponent } from "./layout/footer/footer.component";
import { HomeComponent } from './components/home/home.component';
import { MainShellComponent } from './layout/main-shell/main-shell.component';
import { RouterModule } from "@angular/router";
import { HttpClientJsonpModule, HttpClientModule } from "@angular/common/http";

@NgModule({
    imports:[CommonModule,MaterialModule,RouterModule
      ,HttpClientModule,
      HttpClientJsonpModule
    ],
    exports:[
      CommonModule,
      MaterialModule,
      RouterModule,
      HttpClientModule,
      HttpClientJsonpModule,
      HeaderComponent,
      FooterComponent,
      SidebarComponent,
      SideNavbarComponent,
      HomeComponent
    ],
    providers:[],
    declarations:[
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    SideNavbarComponent,
    HomeComponent,
    MainShellComponent
  ]
})
export class SharedModule{}