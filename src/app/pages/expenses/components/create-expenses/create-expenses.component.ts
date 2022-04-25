import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-expenses',
  templateUrl: './create-expenses.component.html',
  styleUrls: ['./create-expenses.component.scss']
})
export class CreateExpensesComponent implements OnInit {

  formExpense!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.formExpense = this.formBuilder.group({
      date: ['', Validators.required],
      type_expense: ['', Validators.required],
      count: [0, Validators.required],
      name_expense: ['', Validators.required],
      price_unit: [0, Validators.required],
      price_total: [0, Validators.required]
    })
  }

  ngOnInit(): void {

  }

  onSubmit(): void {

  }
}
