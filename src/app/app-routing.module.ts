import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { HomeComponent } from './shared/components/home/home.component';
import { MainShellComponent } from './shared/layout/main-shell/main-shell.component';
import { DataTableComponent } from './data-table/data-table.component';
import { MatDataTableComponent } from './mat-data-table/mat-data-table.component';

const routes: Routes = [
  {
    path: '',
    component: MainShellComponent,
    children: [
      {
        path:'customer',
        component:CustomerComponent
      },
      {
        path:'home',
        component:MatDataTableComponent
      },
      {
        path: '', pathMatch: 'full',
        //component: HomeComponent
        component: DataTableComponent
      }]
  }]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
