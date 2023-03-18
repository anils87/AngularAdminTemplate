import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { HomeComponent } from './shared/components/home/home.component';
import { MainShellComponent } from './shared/layout/main-shell/main-shell.component';

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
        component:HomeComponent
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
