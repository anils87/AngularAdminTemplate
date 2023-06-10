import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CustomerComponent } from './customer/customer.component';
import { DataTableComponent } from './data-table/data-table.component';
import { MatDataTableComponent } from './mat-data-table/mat-data-table.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    DataTableComponent,
    MatDataTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
