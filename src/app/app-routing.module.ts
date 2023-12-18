import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { SalesComponent } from './sales/sales.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NewSalesComponent } from './new-sales/new-sales.component';

const routes: Routes = [
  {
    path: 'navbar',
    component: NavbarComponent,
    children: [
      { path: 'employees', component: EmployeesComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'sales', component: SalesComponent },
      { path: 'newSales', component: NewSalesComponent },
      { path: '', redirectTo: 'navbar', pathMatch: 'full' }
    ]
  },
  
  { path: '', component: LoginComponent },
  { path: '**', redirectTo: 'navbar' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
