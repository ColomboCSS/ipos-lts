import { Routes } from '@angular/router';
import { RouteConstants } from './constants/constants';
import { SupplierComponent } from './components/supplier/supplier.component';
import { CustomerComponent } from './components/customer/customer.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotFoundComponent } from './components/errors/not-found/not-found.component';
import { ServerErrorComponent } from './components/errors/server-error/server-error.component';

export const routes: Routes = [
  {
    path: RouteConstants.SupplierMasterRoute,
    component: SupplierComponent,
    title: 'Supplier',
  },
  {
    path: RouteConstants.CustomerRoute,
    component: CustomerComponent,
    title: 'Customer',
  },
  {
    path: RouteConstants.HomeRoute,
    component: HomeComponent,
    title: 'Home',
  },
  {
    path: RouteConstants.DashboardRoute,
    component: DashboardComponent,
    title: 'Dashboard',
  },
  {
    path: RouteConstants.NotFoundRoute,
    component: NotFoundComponent,
    title: 'Not Found',
  },
  {
    path: RouteConstants.ServerErrorRoute,
    component: ServerErrorComponent,
    title: 'Server Error',
  },
];
