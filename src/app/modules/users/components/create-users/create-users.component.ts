import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-create-users',
  templateUrl: './create-users.component.html',
  styleUrls: ['./create-users.component.scss']
})
export class CreateUsersComponent implements OnInit {
  name: string = '';
  position: string = '';
  email: string = '';
  email_sufijo: string = '@pacificotv.com';

  constructor(
    public _userService: UserService,
    private _router: Router,
  ) {
    // code ...
  }

  ngOnInit(): void {
  }

  addUser(): void {
    // create object
    const EMPLOYEE = {
      name: this.name,
      position: this.position,
      email: this.email + this.email_sufijo,
    }
    console.log(EMPLOYEE);

    this._userService.addEmployee(EMPLOYEE)

    // clean formulario
    this.name = '';
    this.position = '';
    this.email = '';
  }
  navegateToCustomers(): void {
    this._router.navigate(['/customers'])
  }

}
