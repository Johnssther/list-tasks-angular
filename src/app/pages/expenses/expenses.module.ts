import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpensesComponent } from './expenses.component';
import { CreateExpensesComponent } from './components/create-expenses/create-expenses.component';
import { ListExpensesComponent } from './components/list-expenses/list-expenses.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ExpensesComponent,
    CreateExpensesComponent,
    ListExpensesComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    ExpensesComponent
  ]
})
export class ExpensesModule { }
