import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CustomerComponent } from './customer/customer.component';
import { DataTableComponent } from './data-table/data-table.component';
import { MatDataTableComponent } from './mat-data-table/mat-data-table.component';
import { ResponsiveLayoutComponent } from './components/responsive-layout/responsive-layout.component';
import { ProductsComponent } from './products/products.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptorService } from './shared/interceptors/auth-interceptor.service';
import { OAuthService } from 'angular-oauth2-oidc';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    DataTableComponent,
    MatDataTableComponent,
    ResponsiveLayoutComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,    
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    //   {
    //   provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true
    // },
    
],
  bootstrap: [AppComponent]
})
export class AppModule { }
