import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Customer } from 'src/app/models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private customers: Customer[];
  private customers$: Subject<Customer[]>

  constructor() {
    this.customers = [];
    this.customers$ = new Subject();
  }

  addCustomer(customer: Customer): void {
    this.customers.push(customer);
    this.set('customers', this.customers);
    this.customers$.next(this.customers);
  }

  getCustomers$(): Observable<Customer[]> {
    return this.customers$.asObservable();
  }

  set(key: string, data: any) {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.log(error);
    }
  }

  get(key: string) {
    try {
      const data = localStorage.getItem(key);
      console.log(data);

    } catch (error) {
      console.log(error);

    }
  }
}
