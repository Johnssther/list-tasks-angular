import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/modules/customers/services/customer.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title: string = 'Administracion de usuarios';
  count_employees: number = 0;

  constructor(
    private _customerService: CustomerService
  ) { }

  ngOnInit(): void {
    this._customerService.getCustomers$().subscribe(personas => {
      this.count_employees = personas.length;
    })
  }

}
