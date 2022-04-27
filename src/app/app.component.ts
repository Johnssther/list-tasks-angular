import { Component } from '@angular/core';
import { CustomerService } from './modules/customers/services/customer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'Gestión de usuarios';
  count_employees: number = 0;

  constructor(
    private _customerService:CustomerService
  ) {
  }
  ngOnInit(): void {
    this._customerService.getCustomers$().subscribe(personas => {
      this.count_employees = personas.length;
    })
  }
}
