import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { HomeComponent } from './shared/components/home/home.component';
import { MainShellComponent } from './shared/layout/main-shell/main-shell.component';
import { DataTableComponent } from './data-table/data-table.component';
import { MatDataTableComponent } from './mat-data-table/mat-data-table.component';
import { ResponsiveLayoutComponent } from './components/responsive-layout/responsive-layout.component';
import { ProductsComponent } from './products/products.component';
import { FileUploadComponent } from './shared/components/file-upload/file-upload.component';

const routes: Routes = [
  {
    path: '',
    component: MainShellComponent,
    children: [
      {
        path:'home',
        component:HomeComponent
      }, {
        path:'data-table',
        component:DataTableComponent
      },
      {
        path:'mat-table',
        component:MatDataTableComponent
      },
      {
        path:'product',
        component:ProductsComponent
      },
      {
        path:'forms/responsive-layout',
        component:ResponsiveLayoutComponent
      },
      {
        path:'file-upload',
        component:ResponsiveLayoutComponent
      },
      {
        path: '', pathMatch: 'full',
        component: HomeComponent        
      }]
  }]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
