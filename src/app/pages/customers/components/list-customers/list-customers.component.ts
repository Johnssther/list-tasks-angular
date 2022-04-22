import { Component, OnInit } from '@angular/core';
import { Customer, CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-list-customers',
  templateUrl: './list-customers.component.html',
  styleUrls: ['./list-customers.component.scss']
})
export class ListCustomersComponent implements OnInit {

  cutomers: Customer[] = [];

  constructor(
    private _customerService: CustomerService
  ) { }

  ngOnInit(): void {
    this._customerService.getCustomers$().subscribe(customers => {
      this.cutomers = customers;
    })
  }

}
