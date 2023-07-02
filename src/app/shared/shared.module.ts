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
import { HTTP_INTERCEPTORS, HttpClientJsonpModule, HttpClientModule } from "@angular/common/http";
import { UserProfileComponent } from './layout/user-profile/user-profile.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { HttpErrorInterceptor } from "./interceptors/http-error-interceptor.service";
import { LoaderComponent } from './components/loader/loader.component';
import { ErrorComponent } from './components/error/error.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoadingInterceptor } from "./interceptors/loading-interceptor.service";

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
      //HttpClientJsonpModule,
      HeaderComponent,
      FooterComponent,
      SidebarComponent,
      SideNavbarComponent,
      HomeComponent,
      FileUploadComponent
    ],
    providers:[
      //  {
      //    provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true
      //  },
      //  {
      //    provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true
      //  }
    ],
    declarations:[
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    SideNavbarComponent,
    HomeComponent,
    MainShellComponent,
    UserProfileComponent,
    FileUploadComponent,
    LoaderComponent,
    ErrorComponent,
    PageNotFoundComponent
  ]
})
export class SharedModule{}