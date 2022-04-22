import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  suscription: Subscription;
  listEmployees: any[] = [];

  constructor(
    private _userService: UserService
  ) {
    this.suscription = this._userService.getEmployees().subscribe(data => {
      this.listEmployees.push(data);
    })
  }

  ngOnInit(): void {
  }

}
