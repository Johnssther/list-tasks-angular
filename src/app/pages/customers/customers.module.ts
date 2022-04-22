import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCustomersComponent } from './components/list-customers/list-customers.component';
import { CreateCustomersComponent } from './components/create-customers/create-customers.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomersComponent } from './customers.component';



@NgModule({
  declarations: [
    ListCustomersComponent,
    CreateCustomersComponent,
    CustomersComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    CustomersComponent
  ],
})
export class CustomersModule { }
