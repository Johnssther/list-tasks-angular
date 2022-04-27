import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './modules/blog/blog.component';
import { CustomersComponent } from './modules/customers/customers.component';
import { ExpensesComponent } from './modules/expenses/expenses.component';
import { HomeComponent } from './modules/home/home.component';
import { ProspectsComponent } from './modules/prospects/prospects.component';
import { UsersComponent } from './modules/users/users.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: ExpensesComponent },
  { path: 'users', component: UsersComponent },
  { path: 'customers', component: CustomersComponent },
  { path: 'prospects', component: ProspectsComponent },
  { path: 'expenses', component: ExpensesComponent },
  { path: 'blog', component: BlogComponent },

  { path: 'ordenes', loadChildren: () => import('./modules/ordenes/ordenes.module').then(m => m.OrdenesModule) },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
