import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { SalesComponent } from './sales/sales.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  {
    path: 'navbar',
    component: NavbarComponent,
    children: [
      { path: 'employees', component: EmployeesComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'sales', component: SalesComponent },
      { path: '', redirectTo: 'employees', pathMatch: 'full' }
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
