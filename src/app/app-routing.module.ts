import { NgModule } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { OrdersListComponent } from './components/orders-list/orders-list.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductPageComponent } from './components/product-page/product-page.component';

const routes: Routes = [
  { path: 'home', component: DashboardComponent },
  { path: '', component: DashboardComponent },
  { path: 'products', component: ProductPageComponent },
  { path: 'products/form', component: ProductFormComponent },
  { path: 'products/form/:id', component: ProductFormComponent },
  { path: 'orders', component: OrdersListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
