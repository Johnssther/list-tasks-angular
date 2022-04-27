import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProspectsComponent } from './prospects.component';
import { CreateProspectsComponent } from './components/create-prospects/create-prospects.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListProspectsComponent } from './components/list-prospects/list-prospects.component';



@NgModule({
  declarations: [
    ProspectsComponent,
    CreateProspectsComponent,
    ListProspectsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ]
})
export class ProspectsModule { }
