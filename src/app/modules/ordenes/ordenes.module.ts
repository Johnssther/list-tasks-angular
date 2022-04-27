import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdenesRoutingModule } from './ordenes-routing.module';
import { ListComponent } from './pages/list/list.component';
import { CreateComponent } from './pages/create/create.component';
import { ShowComponent } from './pages/show/show.component';


@NgModule({
  declarations: [
    ListComponent,
    CreateComponent,
    ShowComponent
  ],
  imports: [
    CommonModule,
    OrdenesRoutingModule
  ]
})
export class OrdenesModule { }
