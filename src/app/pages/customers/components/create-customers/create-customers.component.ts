import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-create-customers',
  templateUrl: './create-customers.component.html',
  styleUrls: ['./create-customers.component.scss']
})
export class CreateCustomersComponent implements OnInit {

  formCustomer: FormGroup;

  constructor(
    private _customerService: CustomerService
  ) {
    this.formCustomer = new FormGroup({
      name: new FormControl('stefania aguilar'),
      surname: new FormControl('aguilar'),
      company: new FormControl('cencosud'),
      phone: new FormControl('3219193161'),
      email: new FormControl('ms.aguilar@cencosud.com'),
      link_image: new FormControl('https://cdn.pixabay.com/photo/2014/04/03/10/32/user-310807__340.png'),
    })
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this._customerService.addCustomer(this.formCustomer.value);
    // this.formCustomer.reset();
  }

}
