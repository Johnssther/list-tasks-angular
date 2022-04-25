import { Injectable } from '@angular/core';

export interface Expense {
  date: string,
  type_expense: string,
  count: number,
  name_expense: string,
  price_unit: number,
  price_total: number,
}

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  constructor() { }
}
