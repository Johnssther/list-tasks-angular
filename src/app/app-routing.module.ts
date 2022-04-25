import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './pages/customers/customers.component';
import { ExpensesComponent } from './pages/expenses/expenses.component';
import { HomeComponent } from './pages/home/home.component';
import { ProspectsComponent } from './pages/prospects/prospects.component';
import { UsersComponent } from './pages/users/users.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'users', component: UsersComponent },
  { path: 'customers', component: CustomersComponent },
  { path: 'prospects', component: ProspectsComponent },
  { path: 'expenses', component: ExpensesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
