import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { CoreModule } from './core/core.module';
import { UsersModule } from './modules/users/users.module'
import { CustomersModule } from './modules/customers/customers.module';
import { ProspectsModule } from './modules/prospects/prospects.module';
import { HomeModule } from './modules/home/home.module';
import { ExpensesModule } from './modules/expenses/expenses.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

    CoreModule,
    UsersModule,
    CustomersModule,
    ProspectsModule,
    HomeModule,
    ExpensesModule,
  ],
  exports:[
    CoreModule,
    UsersModule,
    CustomersModule,
    ProspectsModule,
    HomeModule,
    ExpensesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
