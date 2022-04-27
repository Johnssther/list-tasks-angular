import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public name: string = '';
  public surnames: string = '';
  public email: string = '';
  public phone: string = '';
  public isActive: boolean = true;
  public isAdmin: boolean = true;
  public username: string = '';
  public points: number = 0;
  public count_employees: number = 0;
  private employees$ = new Subject<any>();

  employees = [
    { name: 'John Alejandro', position: 'Desarrollo de Sotfware', email: 'edi.ohn@cosalt.com' },
    { name: 'Joe Dalton', position: 'Diseñador', email: 'edi.oe@cosalt.com' },
    { name: 'Laura Patiño', position: 'Contadora', email: 'edi.aura@cosalt.com' },
  ]
  model: any = {
    name: this.name,
  }

  constructor() { }

  addEmployee(employee: any) {
    this.employees$.next(employee);
  }
  getEmployees(): Observable<any> {
    return this.employees$.asObservable();
  }

}
